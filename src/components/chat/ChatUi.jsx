import React from 'react'
import Input from '../Input'
import Button from '../Button'
import { useState, useEffect } from 'react'
import ChatStart from './ChatStart';
import ChatEnd from './ChatEnd';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/icon/BackIcon';
import useAuth from '../../hooks/use-auth';
import * as chatApi from "../../api/chat"
import ScrollToBottom from "react-scroll-to-bottom"
import { io } from 'socket.io-client';
export const socket = io.connect('http://localhost:8080'
    , {
        withCredentials: true,
        // extraHeaders: {
        //     "my-custom-header": "abcd"
        // },
        transports: ["websocket"]
    }
);

export default function ChatUi() {
    const navigate = useNavigate();
    const { authUser } = useAuth();
    const [texts, setTexts] = useState([]);
    const [text, setText] = useState({ userId: "", message: "", time: "" }); // {userId, message}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.message) {
            console.log(text.message);
            const sendText = {
                ...text,
                // room: authUser.role === "USER" ? authUser.id : 6,
                role: authUser.role,
                userId: authUser.role === "USER" ? authUser.id : 6,
                userName: authUser.email.split("@")[0],
                // time: new Date().getHours() + ":" + new Date().getMinutes(),
                time: ("" + new Date()).split(" ")[4].slice(0, 5),
                date: Date(new Date()).slice(0, 10)
            };
            socket.emit('send_message', sendText);
            setTexts(c => [...c, sendText]);
            setText({ userId: "", message: "" });
        }
    }

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        (async () => {
            try {
                if (authUser.role === "USER") {
                    socket.emit('join_room', authUser.id);
                    const { data } = await chatApi.getUserChatHistory();
                    console.log(data);
                    setTexts(data.conversation);
                } else {
                    socket.emit('join_room', 6);
                    const { data } = await chatApi.getAdminChatHistory(6);
                    console.log(data);
                    setTexts(data.conversation);
                }
            } catch (error) {
                console.log(error.response?.data.message);
            }
        })()
    }, [])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
            const receiveTextObj = data;
            setTexts(c => [...c, receiveTextObj]);
        });
    }, [socket])

    return (
        <div>
            <div className='flex flex-col justify-between gap-4 min-h-[700px]'>
                <div className='flex flex-col gap-2 relative'>
                    {authUser.role === "USER" ? <button onClick={() => navigate(-1)}><BackIcon /></button> : ""}
                    <div className='flex flex-col gap-4 h-[600px] overflow-y-scroll border-2 p-4'>
                        <ScrollToBottom className='break-words overflow-y-scroll'>
                            {texts?.map((el, id) => {
                                return el.role === authUser.role ?
                                    <ChatEnd textObj={el} key={id}>{el.message}</ChatEnd>
                                    :
                                    <ChatStart textObj={el} key={id}>{el.message}</ChatStart>
                            })}
                        </ScrollToBottom>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex gap-4'>
                    <Input
                        onChange={handleChange}
                        value={text.message}
                        name="message"
                    ></Input >
                    <Button bg="red" color="white">Send</Button>
                </form >
            </div >
        </div>
    )
}