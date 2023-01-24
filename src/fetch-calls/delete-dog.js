import { API_REQUEST } from "../const";

export function deleteDog({ id }) {
  const apiRequest = API_REQUEST + "/" + id;
  return fetch(apiRequest, {
    method: "DELETE",
    redirect: "follow",
  });
}
