import React from "react";
import person from "../../../Assets/images/Ellipse 21.png";

const ChatHeader = ({ userInfo }) => {
  return (
    <div className="pb-2">
      <div className="flex items-center space-x-2 mb-2 cursor-pointer">
        <div className="h-12 w-12 rounded-full border-none">
          {userInfo.image && (
            <img
              src={userInfo.image}
              alt=""
              className="h-full w-full object-cover "
            />
          )}
        </div>
        <span className="text-white">{userInfo.name || "Pranto Bro"}</span>
      </div>
    </div>
  );
};

export default ChatHeader;
