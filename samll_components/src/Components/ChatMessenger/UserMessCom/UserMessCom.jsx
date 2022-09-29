import React from "react";
import person from "../../../Assets/images/Ellipse 21.png";

const UserMessCom = ({ userInfo }) => {
  // Testing for image check
  userInfo.image = person;

  return (
    <div className="flex items-center space-x-[8px] my-4">
      <div className="w-[30px] h-[30px] rounded-full cursor-pointer ">
        {userInfo?.image && (
          <img src={person} alt="" className="w-full h-full object-cover" />
        )}
      </div>

      <h1 className="group relative">
        <span className="font-[500] bg-gray-500 text-txtPrimaryColor rounded-lg px-2 py-1">
          {userInfo?.message}
        </span>

        <span className="absolute top-2 opacity-0 invisible group-hover:opacity-100  ml-5 whitespace-nowrap group-hover:visible transition-all duration-500 text-gray-500">
          {new Date(userInfo?.timestamp).toLocaleTimeString()}
        </span>
      </h1>
    </div>
  );
};

export default UserMessCom;
