import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

export const CreateDogForm = () => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleInput = (e) => {
    const { value, id } = e.target;
    if (id === "name") {
      setNameInput(value);
    } else {
      setDescriptionInput(value);
    }
  };

  const handleSubmitDog = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: nameInput,
      description: descriptionInput,
      image: selectedImage,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/dogs", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <form action="" id="create-dog-form" onSubmit={handleSubmitDog}>
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" id="name" onChange={handleInput} />
      <label htmlFor="description">Dog Description</label>
      <textarea
        onChange={handleInput}
        name=""
        id="description"
        cols="80"
        rows="10"
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue], index) => {
          return (
            <option key={index} value={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
