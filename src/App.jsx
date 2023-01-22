import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { useState, useEffect } from "react";
import "./fonts/RubikBubbles-Regular.ttf";
import { API_REQUEST } from "./const";
import toast, { Toaster } from "react-hot-toast";
import { fetchAllDogs } from "./fetch-calls/get-dogs";

function App() {
  const [dogCards, setDogCards] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState(0);
  const [unFavoriteDogs, setUnFavoriteDogs] = useState(0);
  const [fetchDogs, setFetchDogs] = useState(true);
  const [activeBtn, setActiveBtn] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('dd');
    setLoading(true);
    fetchAllDogs((result)=>{
      setFetchDogs(!fetchDogs)
      setDogCards(result)
      console.log(result);
    
    })
      .then(setLoading(false))
      .catch(() => {
        setLoading(false);
        toast.error("Failed to fetch dogs");
      })
      .finally();
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
      <Toaster position="top-center" />
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
