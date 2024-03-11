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
import UserIcon from '../../assets/icon/UserIcon';
import Spinner from '../Spinner';

export default function ChatUi() {
    const navigate = useNavigate();
    const { authUser } = useAuth();
    const [texts, setTexts] = useState([]);
    const [text, setText] = useState({ userId: "", message: "", time: "" }); // {userId, message}
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);
    const [user, setUser] = useState(null); // room is same as userId, and used for select user to talk with
    const [loading, setLoading] = useState(true);
    const [onFetch, setOnfetch] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.message) {
            console.log(text.message);
            const sendText = {
                ...text,
                role: authUser.role,
                userId: authUser.role !== "USER" ? +user?.userId : authUser.id, // room
                userName: authUser.email.split("@")[0],
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

    window.onbeforeunload = function (e) {
        // do something
        socket.disconnect();
        console.log("disconnect socket");
    };

    useEffect(() => {
        setLoading(true);
        socket?.disconnect();
        console.log("disconnect socket before reconnect");

        const socketTemp = io.connect('http://localhost:8080'
            , {
                withCredentials: true,
                query: {
                    userId: authUser.role !== "USER" ? null : authUser.id,
                    username: authUser.role !== "USER" ? null : authUser.email.split("@")[0],
                },
                transports: ["websocket"]
            }
        );
        setSocket(socketTemp);
        (async () => {
            try {
                if (authUser.role === "USER") {
                    socketTemp.emit('join_room', authUser.id);
                    const { data } = await chatApi.getUserChatHistory();
                    // console.log(data);
                    setTexts(data.conversation);
                } else {
                    socketTemp.on("getOnlineUser", (users) => {
                        // console.log(users);
                        setOnlineUsers(users);
                    })
                }
            } catch (error) {
                console.log(error.response?.data.message);
            } finally {
                setLoading(false);

            }
        })()
    }, [])

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                if (authUser.role !== "USER") {
                    if (+user?.userId) {
                        socket.emit('join_room', +user?.userId);
                        const { data } = await chatApi.getAdminChatHistory(+user?.userId);
                        // console.log(data);
                        setTexts(data.conversation);
                    }
                }
            } catch (error) {
                console.log(error);
                console.log(error.response?.data.message);
            } finally {
                setLoading(false)
            }
        })()
    }, [user])

    useEffect(() => {
        socket?.on('receive_message', (data) => {
            console.log(data);
            const receiveTextObj = data;
            setTexts(c => [...c, receiveTextObj]);
        });
    }, [socket])

    if (loading) return <Spinner />

    return (
        <div className='flex w-full gap-8'>
            {authUser.role !== "USER" && (
                <div className='flex flex-col min-w-56 border-2 gap-2 p-2'>
                    {onlineUsers?.map(el => (
                        <button
                            key={el?.userId}
                            className='bg-red-100 flex h-8 items-center rounded-lg gap-2 px-2'
                            onClick={() => setUser(c => el)}
                        >
                            <UserIcon />
                            <div>
                                Id: <span className='font-semibold'>{el?.userId}</span>
                                , Username: <span className='font-semibold'>{el?.username}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
            <div className='flex flex-col justify-between gap-4 min-h-[700px] w-full'>
                {authUser.role !== "USER" && !user?.userId ?
                    <div className='text-2xl'>You did not choose a conversation yet...</div>
                    :
                    <>
                        <div className='flex flex-col gap-2 relative items-start'>
                            {authUser.role === "USER" ? <button onClick={() => {
                                socket.disconnect();
                                navigate(-1);
                            }}><BackIcon /></button> : <div className='h-[60px] text-3xl self-end mr-6 mt-4 flex gap-4 items-center'><UserIcon size="30" />{user.username}</div>}
                            <div className='flex flex-col gap-4 h-[600px] overflow-y-scroll border-2 p-4 w-full'>
                                <ScrollToBottom className='break-words overflow-y-scroll'>
                                    {texts?.map((el, id) => {
                                        return el.role === authUser.role || (authUser.role !== "USER" && el.role !== "USER") ?
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
                    </>
                }
            </div >
        </div>
    )
}