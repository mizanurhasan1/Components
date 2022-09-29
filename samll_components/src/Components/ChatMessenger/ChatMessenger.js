import React, { useEffect, useState, useRef } from "react";
import ProductsConversations from "../ProductsConversations/ProductsConversations";
import { MdSend } from "react-icons/md";

import { IoTextOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import ChatHead from "../ChatHead/ChatHead";

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
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:02.749Z",
      },
      {
        id: "1",
        message: "Fine",
        timestamp: "2022-08-28T08:51:01.749Z",
      },
      {
        id: "1",
        message: "What about you?",
        timestamp: "2022-08-28T08:51:05.749Z",
      },
      {
        id: "2",
        message: "Pora leha kor thik moto.",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
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
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:02.749Z",
      },
      {
        id: "1",
        message: "Fine",
        timestamp: "2022-08-28T08:51:01.749Z",
      },
      {
        id: "1",
        message: "What about you?",
        timestamp: "2022-08-28T08:51:05.749Z",
      },
      {
        id: "2",
        message: "Pora leha kor thik moto.",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
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
      {
        id: "2",
        message: "Hey!",
        timestamp: "2022-08-28T08:51:04.749Z",
      },
      {
        id: "2",
        message: "Wssaup?",
        timestamp: "2022-08-28T08:51:02.749Z",
      },
      {
        id: "1",
        message: "Fine",
        timestamp: "2022-08-28T08:51:01.749Z",
      },
      {
        id: "1",
        message: "What about you?",
        timestamp: "2022-08-28T08:51:05.749Z",
      },
      {
        id: "2",
        message: "Pora leha kor thik moto.",
        timestamp: "2022-08-28T08:51:04.749Z",
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

const ChatMessenger = () => {
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

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [containerRef, thread]);

  // var el = document.getElementsByClassName('setCustomHeight');
  // window.scroll = window.height;
  // console.log(el)

  return (
    <div className="flex container justify-center space-x-10 bg-gray-800">
      <div className="py-10 w-full">
        <ChatHead userInfo={userInfo} />
        {/* Chating page */}
        <div
          className="px-5 scroll-y overflow-y-auto scrollbar-hide h-[45.625rem] setCustomHeight"
          ref={containerRef}
        >
          {thread.map((data) => {
            if (data.threadId === threadId) {
              const margeMessage = data.messages.sort(
                (prev, next) =>
                  Date.parse(prev.timestamp) - Date.parse(next.timestamp)
              );
              return margeMessage.map((res, key) => (
                <div key={key}>
                  {res.id === "1" && (
                    <div className="flex items-center space-x-[8px] my-4">
                      <img
                        src={userInfo.image}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full cursor-pointer"
                      />
                      <div>
                        <h1 className="group relative">
                          <span className="font-[500] bg-gray-500 text-txtPrimaryColor rounded-lg px-2 py-1">
                            {res.message}
                          </span>

                          <span className="absolute top-2 opacity-0 invisible group-hover:opacity-100  ml-5 whitespace-nowrap group-hover:visible transition-all duration-500 text-gray-500">
                            {new Date(res.timestamp).toLocaleTimeString()}
                          </span>
                        </h1>
                      </div>
                    </div>
                  )}

                  {/*  */}
                  {res.id === "2" && (
                    <div className="flex justify-end my-4">
                      <div>
                        <h1 className=" group">
                          <span className="invisible opacity-0 mr-5 group-hover:opacity-100 ml-5 whitespace-nowrap group-hover:visible transition-all duration-500 text-gray-500">
                            {"" + new Date(res.timestamp).toLocaleTimeString()}
                          </span>
                          <span className="font-[500] bg-PrimaryColor text-txtPrimaryColor rounded-lg px-2 py-1">
                            {res.message}
                          </span>
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
              ));
            }
            return <></>;
          })}
          {/*  */}
        </div>
        <form onSubmit={handleSubmit((fileds) => onSubmit(fileds, "2"))}>
          <div className=" flex">
            {/* <MdAttachment className="text-txtSecondColor w-[42px] h-[22px] space-x-2 mt-2" /> */}

            <div className="flex w-full relative">
              <input
                type="text"
                name="message"
                placeholder="Message...."
                className="w-full
                        bg-transparent border-2
                         border-gray-500 rounded-md
                         pl-8 h-10 text-white"
                {...register("message", { required: true })}
              />

              <IoTextOutline
                className="text-txtSecondColor
                        w-18.25px] h-[22px] absolute left-2 top-2"
              />

              {/* <MdOutlineMic className="text-txtSecondColor w-18.25px] h-[22px] absolute right-3 top-2" /> */}
            </div>
            <button type="submit">
              <MdSend
                className="text-txtSecondColor
                     w-[28px] h-[28px] text-PrimaryColor ml-2 mt-0"
              />
            </button>
          </div>
        </form>
      </div>
      <div>
        <ProductsConversations
          setThreadId={setThreadId}
          setThreadIndex={setThreadIndex}
          setUserinfo={setUserinfo}
          userInfo={userInfo}
        />
      </div>
    </div>
  );
};
export default ChatMessenger;
