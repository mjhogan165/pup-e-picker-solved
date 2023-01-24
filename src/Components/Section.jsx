export const Section = ({
  label,
  children,
  favoriteDogCount,
  unFavoriteDogCount,
  selected,
  handleShowFavorites,
  handleShowUnFavorites,
  handleClickCreateDog,
}) => {
  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div
            onClick={handleShowFavorites}
            id="favoritedBtn"
            className={
              `selector ` + `${selected === "showFavorites" ? "active" : ""}`
            }
          >
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            onClick={handleShowUnFavorites}
            id="unFavoritedBtn"
            className={
              `selector ` + `${selected === "showUnFavorites" ? "active" : ""}`
            }
          >
            unfavorited ( {unFavoriteDogCount} )
          </div>
          <div
            onClick={handleClickCreateDog}
            className={
              `selector ` + `${selected === "createDog" ? "active" : ""}`
            }
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
