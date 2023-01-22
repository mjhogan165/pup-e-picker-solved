import { API_REQUEST } from "../const";
import toast, { Toaster } from "react-hot-toast";

export function fetchAllDogs() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(API_REQUEST, {
    method: "GET",
    redirect: 'follow'
  })
}

// fetch(API_REQUEST, requestOptions)
// .then((response) => response.json())
// .then((parsedResponse) => {
//   const favoriteDogs = parsedResponse.filter((dog) => dog.isFavorite);
//   const unFavoriteDogs = parsedResponse.filter((dog) => !dog.isFavorite);
//   if (activeBtn === "favoriteBtn") {
//     setDogCards(favoriteDogs);
//   } else if (activeBtn === "unFavoritedBtn") {
//     setDogCards(unFavoriteDogs);
//   } else {
//     setDogCards(parsedResponse);
//   }
//   setFavoriteDogs(favoriteDogs);
//   setUnFavoriteDogs(unFavoriteDogs);
// })
// .catch((error) => console.log(error));
