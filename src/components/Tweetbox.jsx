import React, { useState, useEffect } from 'react'
import { Avatar, Button } from '@mui/material'
import "./Tweetbox.css"
import db from './firebase';

function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: 'Pilarfa Mae',
      userName: 'pilarfa_mae',
      verified: true,
      // timestamp: new Date,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://images.generated.photos/0XakdxQ4qeLNnMkOiZYSgdPmZLHJVYDMWUOTdnja5b8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMmQzMjMx/NWQtOGNmNC00MDEz/LWI1ZGMtNjlhNjJi/YWQ3N2FjLmpwZw.jpg"
    });
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src='https://images.generated.photos/0XakdxQ4qeLNnMkOiZYSgdPmZLHJVYDMWUOTdnja5b8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMmQzMjMx/NWQtOGNmNC00MDEz/LWI1ZGMtNjlhNjJi/YWQ3N2FjLmpwZw.jpg'/>
          <input 
            onChange={e => setTweetMessage(e.target.value)}value={tweetMessage}
            placeholder="What's Happening?"
            type="text" />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)} 
          value={tweetImage}
          className="tweetbox__imageInput"
          placeholder="Optional: Enter image URL" 
          type="text" />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetbox__tweetButton"
          on>
            Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
