import { API_REQUEST } from "../const";

export function patchFavorites({ isFavorite, id }) {
  const apiRequest = API_REQUEST + "/" + id;
  return fetch(apiRequest, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      isFavorite: !isFavorite,
    }),
    redirect: "follow",
  });
}
