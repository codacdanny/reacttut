import Newmeetupform from "../components/meetups/Newmeetupform";
import { useNavigate } from "react-router-dom";
function NewMeetupsPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://my-react-project-1f714-default-rtdb.firebaseio.com/meetupdata.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    }); // the default for the fetch function is GET, we have to change it to post, also the fetch function accepts more than one arguments which we have used to structure our data, we can also use promises for fetch request failure
  }
  return (
    <section>
      <h1>ADD new meet up</h1>
      <Newmeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
