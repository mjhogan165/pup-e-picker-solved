import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { useState, useEffect } from "react";
import "./fonts/RubikBubbles-Regular.ttf";
import toast, { Toaster } from "react-hot-toast";
import { fetchAllDogs } from "./fetch-calls/get-dogs";
import { patchFavorites } from "./fetch-calls/fav-dogs";
import { deleteDog } from "./fetch-calls/delete-dog";
import { API_REQUEST } from "./const";

function filterDogs(array) {
  return {
    array: array,
    favorites: array.filter((dog) => dog.isFavorite),
    unFavorites: array.filter((dog) => !dog.isFavorite),
  };
}

function App() {
  const [dogCards, setDogCards] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState(0);
  const [unFavoriteDogs, setUnFavoriteDogs] = useState(0);
  const [selected, setSelected] = useState("");

  const sortResults = (arr) => {
    const filter = filterDogs(arr);
    setFavoriteDogs(filter.favorites);
    setUnFavoriteDogs(filter.unFavorites);
    if (selected === "showFavorites") {
      setDogCards(filter.favorites);
    } else if (selected === "showUnFavorites") {
      setDogCards(filter.unFavorites);
    } else setDogCards(arr);
  };

  const fetchAndSort = () => {
    fetchAllDogs()
      .then((response) => response.json())
      .then((result) => {
        sortResults(result);
      })
      .catch((error) => {
        toast.error(`${error}`, { id: "fetchDogs" });
      });
  };
  useEffect(() => {
    toast.loading("Fetching Dogs...", { id: "fetchDogs" });
    fetch(API_REQUEST, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        sortResults(result);
        toast.success("DOGS FOUND", { id: "fetchDogs" });
      })
      .catch(() => {
        toast.error("Failed to fetch dogs", { id: "fetchDogs" });
      });
  }, []);

  const handleClickHeart = (dog) => {
    patchFavorites(dog)
      .then(() => {
        fetchAndSort();
      })
      .catch((error) => {
        toast.error(`${error}`, { id: "fetchDogs" });
      });
  };

  const handleClickTrash = (dog) => {
    deleteDog(dog)
      .then(() => {
        fetchAndSort();
      })
      .catch((error) => {
        toast.error(`${error}`, { id: "fetchDogs" });
      });
  };

  const handleShowFavorites = () => {
    fetchAllDogs()
      .then((response) => response.json())
      .then((result) => {
        const filter = filterDogs(result);
        if (selected === "showFavorites") {
          setSelected("");
          setDogCards(result);
        } else {
          setSelected("showFavorites");
          setDogCards(filter.favorites);
        }
        return result;
      })
      .catch((error) => {
        toast.error(`${error}`, { id: "fetchDogs" });
      });
  };
  const handleShowUnFavorites = () => {
    fetchAllDogs()
      .then((response) => response.json())
      .then((result) => {
        const filter = filterDogs(result);
        if (selected === "showUnFavorites") {
          setSelected("");
          setDogCards(result);
        } else {
          setSelected("showUnFavorites");
          setDogCards(filter.unFavorites);
        }
        return result;
      })
      .catch((error) => {
        toast.error(`${error}`, { id: "fetchDogs" });
      });
  };

  const handleClickCreateDog = () => {
    if (selected === "createDog") {
      setSelected("");
    } else setSelected("createDog");
  };

  return (
    <div className="App">
      <Toaster position="top-center" />
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        favoriteDogCount={favoriteDogs.length}
        unFavoriteDogCount={unFavoriteDogs.length}
        handleShowFavorites={handleShowFavorites}
        handleShowUnFavorites={handleShowUnFavorites}
        label={"Dogs: "}
        selected={selected}
        handleClickCreateDog={handleClickCreateDog}
      >
        {selected !== "createDog" && (
          <Dogs
            label={"All Dogs"}
            handleClickHeart={handleClickHeart}
            dogCards={dogCards}
            handleClickTrash={handleClickTrash}
            unFavoriteDogs={unFavoriteDogs}
            favoriteDogs={favoriteDogs}
          />
        )}
        {selected === "createDog" && <CreateDogForm />}
      </Section>
    </div>
  );
}

export default App;
