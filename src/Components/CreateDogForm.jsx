import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import { createDogFetch } from "../fetch-calls/create-dog";
import toast from "react-hot-toast";

export const CreateDogForm = () => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleSubmitDog = () => {
    createDogFetch({
      name: nameInput,
      image: selectedImage,
      description: descriptionInput,
    })
      // .then(() => {
      //   toast.success("Success!!");
      // })
      // .catch(() => {
      //   toast.error("Error Fetching Dogs");
      // })
      // .finally(() => {
      //   setNameInput("");
      //   setDescriptionInput("");
      //   setSelectedImage(dogPictures.BlueHeeler);
      // });
    toast.promise(createDogFetch({
      name: nameInput,
      image: selectedImage,
      description: descriptionInput,
    }), {
      loading: 'Creating Your Dog...',
      success: 'Dog Created!',
      error: 'Error when fetching',
    }).finally(() => {
      setNameInput("")
      setDescriptionInput("")
      setSelectedImage(dogPictures.BlueHeeler)
    })
  };
  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitDog();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        type="text"
        id="name"
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
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
