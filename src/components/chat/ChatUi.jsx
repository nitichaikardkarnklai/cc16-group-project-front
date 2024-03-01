import React from 'react'
import Input from '../Input'
import Button from '../Button'
import { useState, useEffect } from 'react'
import ChatStart from './ChatStart';
import ChatEnd from './ChatEnd';
// import { sendMsg, joinRoom, connectSocket, socket, receiveMsg } from '../api/socket';

export default function ChatUi() {
    const [texts, setTexts] = useState([]);
    const [text, setText] = useState({ userId: "", message: "", time: "" }); // {userId, message}
    // connectSocket();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (text.message) {
        //     console.log(text.message);
        //     sendMsg({ ...text, room: 1 });
        //     setText({ userId: "", message: "" });
        // }
    }

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // joinRoom(1);
    }, [])

    // useEffect(() => {
    //     const receiveTextObj = receiveMsg();
    //     setTexts(c => [...c, receiveTextObj]);
    // }, [socket])

    return (
        <div className='flex flex-col'>
            {/* text render, waiting for state look like */}
            {texts.map((el, id) => <ChatStart textObj={el} key={id} />)}
            <ChatStart textObj={text} />
            <ChatEnd textObj={text} />
            <form onSubmit={handleSubmit} className='flex gap-4 fixed left-[40%] right-12 bottom-12'>
                <Input
                    onChange={handleChange}
                    value={text.message}
                    name="message"
                ></Input>
                <Button bg="blue" color="white">Send</Button>
            </form>
        </div>
    )
}