import React from "react";
import UserImage from "../images/user.png";

export default function ProfileTemp(props) {
  return (
    <div
      className={`bg-white z-0 mx-auto w-fit h-32 shadow border-2 flex ${props.show} absolute top-16 right-10`}
    >
      <div className="p-4 my-auto w-fit px-36 h-fit mx-auto">
        <div className="flex">
          <img
            className="w-12 h-12 bg-blue-100 rounded-full object-cover mr-4 shadow"
            src={UserImage}
            alt="avatar"
          />
          <div>
            <div>
              <h1 className="text-xl text-blue-1">
                {props.Profile.first_name} {props.Profile.last_name}
                {/* manas jadhav */}
              </h1>
            </div>
            <div>
              <h3 className="text-lg text-slate-500">
                {props.Profile.email}
                {/* haha@gmail.com */}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
