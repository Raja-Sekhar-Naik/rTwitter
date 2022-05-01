import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import app from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const db = getFirestore(app);
      const postsCollection = collection(db, 'posts');
      const posts = await getDocs(postsCollection);

      setPosts(posts._docs)
    }
    
    getPosts()
    // collection(db, "posts").onSnapshot((snapshot) => {
    //   console.log(snapshot)
    //   setPosts(snapshot.docs.map((doc) => doc.data()))
    // });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home <span > ---Cloned By Raja Sekhar Naik--- </span></h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) =>  {
          let data = post._document.data.value.mapValue.fields;
          console.log(data)
          
          return (
            <Post
              key={data.text.stringValue}
              displayName={data.displayName.stringValue}
              username={data.username.stringValue}
              verified={data.verified.booleanValue}
              text={data.text.stringValue}
              avatar={data.avatar.stringValue}
              image={data.image.stringValue}
          />
          )
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;