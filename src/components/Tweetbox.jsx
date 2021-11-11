import React from 'react'
import { Avatar, Button } from '@mui/material'
import "./Tweetbox.css"

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src='https://images.generated.photos/0XakdxQ4qeLNnMkOiZYSgdPmZLHJVYDMWUOTdnja5b8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMmQzMjMx/NWQtOGNmNC00MDEz/LWI1ZGMtNjlhNjJi/YWQ3N2FjLmpwZw.jpg'/>
          <input placeholder="What's Happening?" type="text" />
        </div>
        <input 
          className="tweetbox__imageInput"
          placeholder="Optional: Enter image URL" 
          type="text" />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
