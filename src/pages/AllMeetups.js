import Meetuplists from "../components/meetups/Meetuplists";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsoading(true);
    async function getData() {
      let data = await (
        await fetch(
          "https://my-react-project-1f714-default-rtdb.firebaseio.com/meetupdata.json"
        )
      ).json();
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      console.log(meetups);
      setIsoading(false);
      setLoadedMeetups(meetups);
    }
    getData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meet ups</h1>
      <Meetuplists meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
