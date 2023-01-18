import { Icons } from "../assets/icons";
export const FavoriteButton = ({ handleClickHeart, dog }) => (
  <img
    src={Icons.EmptyHeart}
    alt=""
    className="favorite-button"
    style={{ width: 40, border: 0 }}
    onClick={(e) => handleClickHeart(dog, e)}
  />
);
