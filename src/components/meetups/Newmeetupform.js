import { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./NewmeetupForms.module.css";
function Newmeetupform(props) {
  //const titleInputRef = useRef();
  const [title, setTitle] = useState("");
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  let handleChangeTitle = (event) => {
    setTitle(event.Target.Value);
  };
  function submitHandler(event) {
    event.preventDefault(); // this prevents the browser's default mode of sending http request to the server and we don't want that

    const enteredImage = imageInputRef.current.value;

    const enteredAddress = addressInputRef.current.value;

    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: title,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meet up title</label>
          <input
            type="text"
            required
            id="title"
            onChange={handleChangeTitle}
            value={title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meet up image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meet up address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meet up description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default Newmeetupform;
