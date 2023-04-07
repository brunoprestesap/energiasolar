import React from "react";

const CardMotivos = ({ img, text }) => {
  return (
    <div className="p-5 flex flex-col items-center justify-center rounded-full bg-[#277BC0] w-60 h-60 my-5">
      <div className="my-3">
        {img}
      </div>
      <p className="text-center text-[#FFF4CF] font-semibold text-xl">{text}</p>
    </div>
  );
};

export default CardMotivos;
