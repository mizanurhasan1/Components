import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoTextOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import AdminMessCom from "./AdminMessCom/AdminMessCom";
import ChatBody from "./ChatBody/ChatBody";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatInputField from "./ChatInputField/ChatInputField";
import UserMessCom from "./UserMessCom/UserMessCom";

const fakeThreads = [
  {
    thread: "Hola",
    threadId: "7398436945",
    orderId: "123456",
    messages: [
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:03.749Z",
      },
    ],
  },
  {
    thread: "Holaa",
    threadId: "7398436946",
    orderId: "123456",
    messages: [
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
    ],
  },
  {
    thread: "Hola",
    threadId: "7398436947",
    orderId: "123456",
    messages: [
      {
        id: "1",
        message: "Yoo",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Aree mama",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Fine",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "What about you?",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "gumaaaaaa",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
    ],
  },
  {
    thread: "Holaa",
    threadId: "7398436948",
    orderId: "123456",
    messages: [
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Hello",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "How's everything going?",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
    ],
  },
  {
    thread: "Holaa",
    threadId: "7398436949",
    orderId: "123456",
    messages: [
      {
        id: "1",
        message: "Tata",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Ba bye",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Chole jaaaa",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Jamo na",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "1",
        message: "Thakmo",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
    ],
  },
];
// const conversation = [
//   {
//     _id: 1,
//     threadId: "7398436945",
//     img: profilePic,
//     name: "Samian Brother",
//     lastSMS: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 2,
//     threadId: "7398436946",
//     img: profilePic1,
//     name: "Sajon Hossen",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 3,
//     threadId: "7398436947",
//     img: profilePic2,
//     name: "John Doe",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 4,
//     threadId: "7398436948",
//     img: profilePic3,
//     name: "Pranta Das",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 5,
//     threadId: "7398436949",
//     img: profilePic4,
//     name: "Madam",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 6,
//     threadId: "7398436949",
//     img: profilePic4,
//     name: "Madam",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 7,
//     threadId: "7398436949",
//     img: profilePic4,
//     name: "Madam",
//     lastChat: "Hey Rabiul  6 h",
//   },
//   {
//     _id: 8,
//     threadId: "7398436949",
//     img: profilePic4,
//     name: "Madam",
//     lastChat: "Hey Rabiul  6 h",
//   },
// ];
const ChatWrapepr = () => {
  const [threadId, setThreadId] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [threadIndex, setThreadIndex] = useState(0);
  const [thread, setThread] = useState(fakeThreads);
  const [userInfo, setUserinfo] = useState({
    name: "",
    image: "",
    lastSms: "",
  });

  const onSubmit = (data, id) => {
    const newThread = [...thread];
    newThread[threadIndex]?.messages.push({
      id: "2",
      message: data.message,
      timestamp: new Date().toISOString(),
    });
    setThread(newThread);
    reset();
  };

  // Set Thread ID at First
  useEffect(() => {
    setThreadId(thread[0]?.threadId);
  }, []);

  return (
    <div className="flex container justify-center space-x-10 bg-gray-800">
      <div className="py-10 w-full">
        {/* <ChatHead userInfo={userInfo} /> */}
        <ChatHeader userInfo={userInfo} />
        {/* Chating page */}
        <ChatBody ChatData={thread} ThreadId={threadId} />

        {/* On Message Input Form */}
        <ChatInputField
          formValidate={{ register, handleSubmit, reset }}
          onSubmit={(fileds) => onSubmit(fileds, "2")}
        />
      </div>
    </div>
  );
};

export default ChatWrapepr;
