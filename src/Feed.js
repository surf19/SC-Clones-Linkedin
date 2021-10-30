import React from "react";
// import firebase from 'firebase';
import { useState } from "react";
import { useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "./firebase";
import 'firebase/firestore';
import 'firebase/auth';


function Feed() {
  const [posts, setPosts] = useState([]);
  const [input,setInput] = useState("");
  

  // create a rowtime listener to firebase. Anytime posts change its updated in firestore
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    // add posts:
    db.collection('posts').add ({
        name: 'Tintin T',
        description: 'this is a ttest',
        message:input,
        photoUrl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#COCBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <post />
      ))}

      <Post
        name="Tintin T"
        description="This is a test"
        message="Wow this worked"
      />
    </div>
  );
}

export default Feed;
