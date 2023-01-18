import { Icons } from "../assets/icons";

export const TrashButton = ({ disabled = false, handleClickTrash, dog }) => (
  <img
    src={Icons.Trash}
    alt=""
    className="trash-button"
    style={{
      width: 40,
      border: 0,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
    onClick={(e) => handleClickTrash(dog, e)}
  />
);
