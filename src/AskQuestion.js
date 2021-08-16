import React from 'react';
import './AskQuestion.css';
import {Avatar, Button, Input} from "@material-ui/core";

function AskQuestion() {
    return (
        <div className="questionbox">
            <form>
                <div class="questionbox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/82510045?v=4"/>
                    <input type="text" placeholder="Ask a question!"/>
                </div>
                <input class="questionbox__fileUpload" type="file" name="" id=""/>
                <Button className="questionbox__button">Ask</Button>
            </form>
        </div>
    )
}

export default AskQuestion