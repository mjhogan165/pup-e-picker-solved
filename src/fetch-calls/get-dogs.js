import { API_REQUEST } from "../const";

export function fetchAllDogs() {
  return fetch(API_REQUEST, {
    method: "GET",
    redirect: "follow",
  });
}
