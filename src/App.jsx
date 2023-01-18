import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { useState, useEffect } from "react";
import "./fonts/RubikBubbles-Regular.ttf";
import { API_REQUEST } from "./const";

function App() {
  const [dogCards, setDogCards] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState(0);
  const [unFavoriteDogs, setUnFavoriteDogs] = useState(0);
  const [fetchDogs, setFetchDogs] = useState(true);
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_REQUEST, requestOptions)
      .then((response) => response.json())
      .then((parsedResponse) => {
        const favoriteDogs = parsedResponse.filter((dog) => dog.isFavorite);
        const unFavoriteDogs = parsedResponse.filter((dog) => !dog.isFavorite);
        if (activeBtn === "favoriteBtn") {
          setDogCards(favoriteDogs);
        } else if (activeBtn === "unFavoritedBtn") {
          setDogCards(unFavoriteDogs);
        } else {
          setDogCards(parsedResponse);
        }
        setFavoriteDogs(favoriteDogs);
        setUnFavoriteDogs(unFavoriteDogs);
      })
      .catch((error) => console.log(error));
  }, [fetchDogs]);

  const handleClickHeart = (dog) => {
    const isFavorite = dog.isFavorite;
    const apiRequest = API_REQUEST + "/" + dog.id;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      isFavorite: !isFavorite,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(apiRequest, requestOptions)
      .then((response) => response.json())
      .then(() => {
          setFetchDogs(!fetchDogs);

      })
      .catch((error) => console.log(error));
  };

  const handleClickTrash = (dog) => {
    const apiRequest = API_REQUEST + "/" + dog.id;
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(apiRequest, requestOptions)
      .then((response) => response.json())
      .then(() => setFetchDogs(!fetchDogs))
      .catch((error) => console.log(error));
  };

  const handleFilterFavorites = (e) => {
    let id = e.target.id;
    if (activeBtn === id) {
      setActiveBtn("none");
    } else {
      setActiveBtn(id);
    }
    setFetchDogs(!fetchDogs);
  };

  const handleClickCreateDog = () => {
    setActiveBtn("createDog");
  };

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        favoriteDogCount={favoriteDogs.length}
        unFavoriteDogCount={unFavoriteDogs.length}
        handleFilterFavorites={handleFilterFavorites}
        label={"Dogs: "}
        activeBtn={activeBtn}
        handleClickCreateDog={handleClickCreateDog}
      >
        {activeBtn !== "createDog" && (
          <Dogs
            label={"All Dogs"}
            handleClickHeart={handleClickHeart}
            dogCards={dogCards}
            handleClickTrash={handleClickTrash}
            unFavoriteDogs={unFavoriteDogs}
            favoriteDogs={favoriteDogs}
            activeBtn={activeBtn}
          />
        )}
        {activeBtn === "createDog" && <CreateDogForm />}
      </Section>
    </div>
  );
}

export default App;
