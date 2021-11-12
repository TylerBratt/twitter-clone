import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ 
    displayName, 
    userName, 
    verified, 
    timestamp,
    text,
    image,
    avatar
  }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.generated.photos/0XakdxQ4qeLNnMkOiZYSgdPmZLHJVYDMWUOTdnja5b8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMmQzMjMx/NWQtOGNmNC00MDEz/LWI1ZGMtNjlhNjJi/YWQ3N2FjLmpwZw.jpg"/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Pilarfa Mae <span className ="post__headerSpecial">
                <VerifiedIcon className="post__badge"/> @pilarfa_mae
                </span>            
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to create a twitter clone with React</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post
