import React from "react";

const BearersCard = (props) => {
  return (
    <div className="border-none text-center rounded-xl h-[300px] drop-shadow-2xl">
      <img src={props.photo} className="w-[200px] rounded-t-xl" />
      <div className="p-1 bg-gray-400 rounded-b-xl">
        <h1 className="font-bold text-md">{props.name}</h1>
        <h1 className="text-xs font-semibold">{props.role}</h1>
        <h1 className="text-xs font-medium">{props.year}</h1>
        <div className="flex justify-evenly my-2">
          <a href={props.linkedin}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={props.email}>
            <i className="fa fa-envelope"></i>
          </a>
          <a href={props.phoneNo}>
            <i className="fa fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BearersCard;
