import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch(
      'https://react-getting-started-3017b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {

      const meetups = [];
      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsloading(false);
      setLoadedMeetups(meetups);
    });

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
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage