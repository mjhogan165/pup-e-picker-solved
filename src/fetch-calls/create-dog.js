import { API_REQUEST } from "../const";

export function createDogFetch({ name, description, image }) {
  return fetch(API_REQUEST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      image,
    }),
  });
}
