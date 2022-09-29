import React, { useEffect, useRef } from "react";
import AdminMessCom from "../AdminMessCom/AdminMessCom";
import UserMessCom from "../UserMessCom/UserMessCom";

const ChatBody = ({ ChatData, ThreadId }) => {
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
  }, [containerRef, ChatData]);
  return (
    <div
      className="text-xs px-5 scroll-y overflow-y-auto scrollbar-hide h-[45.625rem] "
      ref={containerRef}
    >
      {ChatData.map((data) => {
        if (data.threadId === ThreadId) {
          const margeMessage = data.messages.sort(
            (prev, next) =>
              Date.parse(prev.timestamp) - Date.parse(next.timestamp)
          );
          return margeMessage.map((res, key) => (
            <div key={key}>
              {res.id === "1" && <UserMessCom userInfo={res} />}

              {/*  */}
              {res.id === "2" && <AdminMessCom adminInfo={res} />}
            </div>
          ));
        }
        return <></>;
      })}
      {/*  */}
    </div>
  );
};

export default ChatBody;
