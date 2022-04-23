import React from "react";

export default function Avatar({ url, className }) {
  return (
    <div className={`${className}`}>
      <a loading="lazy" href="https://imgbb.com/">
        <img
          className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 "
          src="https://i.ibb.co/dW8FP90/edit1.jpg"
          alt="profile"
        />
      </a>
    </div>
  );
}
