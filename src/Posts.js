import React from 'react'
import {Avatar} from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './Posts.css'

function Posts() {
    return (
        <div className="post">
            <div class="post__avatar">
                <Avatar src="https://avatars.githubusercontent.com/u/82510045?v=4"/>
            </div>
            <div class="post__body">
                <div class="post__header">
                    <div class="post_headerText">
                        <h3>
                            Anurag Sharma
                        </h3>
                        <p>21/02/2021</p>
                    </div>
                    <div class="post__headerDescription">
                        <p>How to learn Web Devlopment? Can anyone helpasfdhasdkfjlhk</p>
                    </div>
                    <img src="https://pbs.twimg.com/media/E81pOAAVoAEwyub?format=jpg&name=small" alt="" />
                    <div class="post__footer">
                        <ThumbUpAltIcon/>
                        <ThumbDownIcon/>
                        <ChatBubbleIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
