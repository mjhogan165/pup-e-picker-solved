import { API_REQUEST } from "../const";

export function fetchAllDogs() {
  return fetch(API_REQUEST, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("could not create dog");
    }
  });
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
