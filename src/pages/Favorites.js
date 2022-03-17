import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Meetuplists from "../components/meetups/Meetuplists";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. Wanna add some?</p>;
  } else {
    content = <Meetuplists meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
