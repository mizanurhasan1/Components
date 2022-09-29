import React, { useEffect, useState } from "react";

import "./BuyImage.css";
import BuyButton from "../Shared/Button/BuyButton/BuyButton.js";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const data2 = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://st2.depositphotos.com/4211709/9617/i/600/depositphotos_96171264-stock-photo-solitude-tree-with-birds.jpg",
  "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
  "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://media.gettyimages.com/photos/cityscape-of-dhaka-bangladesh-picture-id1248057082?s=612x612",
];
export const BuyImage = () => {
  const [imgInfo, setImgInfo] = useState({
    activeImgURL: data2[0],
    upAnkerTag: false,
    downAnkerTag: true,
  });

  // for changing image on click
  const onChnageImage = (id) => {
    Object.keys(data2).forEach((key) => {
      data2[key] === data2[id] &&
        setImgInfo({
          ...imgInfo,
          activeImgURL: data2[id],
        });
    });
  };

  // scrolling down by clicking on anker tag
  const onMoveDown = () => {
    var slide = document.getElementById("slider");
    slide.scrollBy(0, 200);
  };
  // scrolling up by clicking on anker tag
  const onMoveUp = () => {
    var slide = document.getElementById("slider");
    // slide.scrollLeft = slide.scrollLeft - 500;
    slide.scrollBy(0, -200);
  };

  // anker tag disable enable for scrolling
  const slider = document.getElementById("slider");

  if (slider) {
    slider.addEventListener("scroll", () => {
      let tmpImgInfo = { ...imgInfo };
      if (slider.scrollTop > 200) {
        tmpImgInfo["upAnkerTag"] = true;
        if (slider.scrollHeight - slider.scrollTop < slider.scrollTop) {
          tmpImgInfo["downAnkerTag"] = false;
        } else {
          tmpImgInfo["downAnkerTag"] = true;
          // setImgInfo({ ...imgInfo, downAnkerTag: true });
        }
      } else {
        tmpImgInfo["downAnkerTag"] = true;
        tmpImgInfo["upAnkerTag"] = false;
      }
      setImgInfo(tmpImgInfo);
      console.log(imgInfo);
    });
  }

  return (
    <div className="pt-10 justify-items-center max-w-7xl mx-auto mb-10 ">
      {" "}
      {/* mx-[80px] */}
      <div className="text-center">
        <div
          className="grid grid-rows-6 gap-[20px] xl:grid-cols-12 xl:gap-[100px]
          h-[588px] overflow-ellipsis"
        >
          <div className="xl:p-0 p-4 row-span-4 xl:col-span-9 xl:h-[588px] rounded-2xl xl:shadow-xl shadow-black glass xl:glass">
            {/* Image */}
            <img
              src={imgInfo.activeImgURL}
              alt=""
              className="h-full shadow-black shadow-xl w-full object-cover rounded-2xl "
            />
          </div>
          <div className=" relative flex row-span-2 xl:col-span-3  overflow-scroll  xl:h-[588px] no-scrollbar">
            <div
              id="slider"
              className="flex xl:flex-col w-auto
            xl:h-[588px] xl:space-y-[24px]
            space-x-[24px] xl:space-x-0 overflow-x-scroll
            xl:overflow-y-scroll
            no-scrollbar scroll-smooth"
            >
              {/* list of images */}
              {data2.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      imgInfo.activeImgURL === data2[key]
                        ? " activeBuyImage"
                        : " deactiveBuyImage"
                    } rounded-[15px] min-h-[105.88px] min-w-[100px]
                      xl:min-h-[180px]  xl:min-w-[180px]
                      overflow-hidden bg-red-500 transition-all duration-500
                      hover:shadow-xl hover:shadow-black
                       ease-in-out cursor-pointer`}
                    onClick={() => onChnageImage(key)}
                  >
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full object-cover lg:hover:scale-110 duration-1000"
                    />
                  </div>
                );
              })}
            </div>

            {!imgInfo.upAnkerTag ? (
              ""
            ) : (
              <RiArrowUpSLine
                className="absolute w-10 h-10 text-PrimaryColor
              top-0 transform left-[50%] translate-x-[-50%]
              cursor-pointer hover:text-txtPrimaryColor
               invisible xl:visible z-50 "
                onClick={onMoveUp}
              />
            )}
            {!imgInfo.downAnkerTag || data2.length < 4 ? (
              ""
            ) : (
              <RiArrowDownSLine
                className="absolute w-10 h-10 text-PrimaryColor
              bottom-0 transform left-[50%] translate-x-[-50%]
              cursor-pointer hover:text-txtPrimaryColor invisible xl:visible "
                onClick={() => onMoveDown()}
              />
            )}
          </div>
        </div>
        {/* buty button */}
        <div className="my-8">
          <Link to="/buynow">
            <BuyButton />
          </Link>
        </div>
      </div>
    </div>
  );
};
