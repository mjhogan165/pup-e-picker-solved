import { DogCard } from "./DogCard";

// Right now this is a static array, but you will need to fetch these dogs from the local database

// Right now these dogs are constant, but in reality we should be getting these from our server
export const Dogs = ({
  handleClickHeart,
  dogCards,
  handleClickTrash,
  activeBtn,
}) => {

  // if (activeBtn === "favoritedBtn") {
  //   array = array.filter((dog) => dog.isFavorite);
  // } else if (activeBtn === "unFavoritedBtn") {
  //   array = array.filter((dog) => !dog.isFavorite);
  // }

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {dogCards.map((dog) => (
        <DogCard
          handleClickHeart={handleClickHeart}
          handleClickTrash={handleClickTrash}
          dog={dog}
          key={dog.id}
        />
      ))}
    </>
  );
};
