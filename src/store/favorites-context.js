import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupid) => {},
  itemIsFavorite: (meetupid) => {},
});
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupid) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupid);
    }); // this code loops through the array of userFavorite(the initial one) checks for the presence of the meet up ID that we want to remove, once it is present it returns true and then it is deleted
  }
  function itemIsFavoriteHandler(meetupid) {
    return userFavorites.some((meetup) => meetup.id === meetupid);
  } // this code goes through the array of user fvorite and checks for any meetup or some meetup id that is present, then returns true if it is present, thereby adding it to the favorites

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
