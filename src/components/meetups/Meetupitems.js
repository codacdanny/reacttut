import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./Meetupitems.module.css";
import Card from "../UI/Card";
function Meetupitems(props) {
  const favoriteCTX = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCTX.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCTX.removeFavorite(props.id);
    } else {
      favoriteCTX.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default Meetupitems;
