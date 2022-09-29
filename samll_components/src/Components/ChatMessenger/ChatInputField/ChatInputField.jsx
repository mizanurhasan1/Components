import React from "react";
import { useForm } from "react-hook-form";
import { IoTextOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";

const ChatInputField = ({ onSubmit = () => {}, formValidate = {} }) => {
  const { register, handleSubmit, reset } = useForm();
  console.log(formValidate);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex">
        <div className="flex w-full relative">
          <input
            style={{ border: "1px solid white" }}
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
        </div>
        <button type="submit">
          <MdSend
            className="
               w-[28px] h-[28px] text-PrimaryColor ml-2 mt-0"
          />
        </button>
      </div>
    </form>
  );
};

export default ChatInputField;
