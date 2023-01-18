export const Section = ({
  label,
  children,
  favoriteDogCount,
  unFavoriteDogCount,
  activeBtn,
  handleFilterFavorites,
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
            onClick={handleFilterFavorites}
            id="favoritedBtn"
            className={
              `selector ` + `${activeBtn === "favoritedBtn" ? "active" : ""}`
            }
          >
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            onClick={handleFilterFavorites}
            id="unFavoritedBtn"
            className={
              `selector ` + ` ${activeBtn === "unFavoritedBtn" ? "active" : ""}`
            }
          >
            unfavorited ( {unFavoriteDogCount} )
          </div>
          <div
            onClick={handleClickCreateDog}
            className={
              `selector ` + ` ${activeBtn === "createDog" ? "active" : ""}`
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
