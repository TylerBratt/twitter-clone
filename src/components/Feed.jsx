import React, { useState, useEffect } from 'react';
import "./Feed.css";
import Post from './Post';
import Tweetbox from './Tweetbox';
import db from './firebase';
import FlipMove from 'react-flip-move';
// import firebase from '@firebase/app-compat'

function Feed() {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[])

  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweetbox */}
      <Tweetbox />
      {/* Post */}
      <FlipMove>
        {posts.map(post =>(
          <Post
            key={post.id}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            // timestamp={post.timestamp}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
