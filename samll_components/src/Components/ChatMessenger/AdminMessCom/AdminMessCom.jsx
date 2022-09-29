import React from "react";

const AdminMessCom = ({ adminInfo }) => {
  return (
    <div className="flex justify-end my-4">
      <h1 className=" group">
        <span className="invisible opacity-0 mr-5 group-hover:opacity-100 ml-5 whitespace-nowrap group-hover:visible transition-all duration-500 text-gray-500">
          {"" + new Date(adminInfo.timestamp).toLocaleTimeString()}
        </span>
        <span className="font-[500] bg-PrimaryColor text-txtPrimaryColor rounded-lg px-2 py-1">
          {adminInfo.message}
        </span>
      </h1>
    </div>
  );
};

export default AdminMessCom;
