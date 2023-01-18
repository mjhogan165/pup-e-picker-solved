import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";
export const DogCard = ({ dog, handleClickHeart, handleClickTrash }) => {
  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {dog.isFavorite ? (
        <UnfavoriteButton handleClickHeart={handleClickHeart} dog={dog} />
      ) : (
        <FavoriteButton handleClickHeart={handleClickHeart} dog={dog} />
      )}

      {/* Use this button to delete a puppy :( */}
      <TrashButton
        disabled={false}
        dog={dog}
        handleClickTrash={handleClickTrash}
        onClick={() => {}}
      />

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favoritest a dog */}
      {/* Try making className "favorite-overlay active"*/}
      <div className="favorite-overlay ">{"<3"}</div>

      {/* Ignore this  */}
      {/* You can temporarily set a unfavorite overlay after a user favoritest a dog */}
      {/* Try making className "unfavorite-overlay active"*/}
      <div className="unfavorite-overlay">{"</3"}</div>

      {/* A Dogs Name */}
      <p className="dog-name">{dog.name}</p>

      {/* A Dogs Image */}
      <img src={dog.image} alt={dog.name} />

      {/*  A Dogs description*/}
      <p className="dog-description">{dog.description}</p>
    </div>
  );
};
