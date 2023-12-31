import { Avatar } from '@mui/material';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Post.css';


function Post({ profilePic, image, usrename, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic}
                    className='post__avatar' />
                <div className='post__topInfo'>
                    <h3>{usrename}</h3>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{new Date().toUTCString()}</p>

                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img src={image}
                    alt='' />
            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Post;