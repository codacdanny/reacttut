import Meetupitems from "./Meetupitems";
import classes from "./Meetupitems.module.css";

function Meetuplists(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(
        (meetup) => (
          <Meetupitems
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ) // here we mapped every meet up props to another JSX element which is the meetupitem component
      )}
    </ul>
  );
}

export default Meetuplists;
