import React from "react";

export default function Spinner() {
  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="flex flex-row gap-2 mr-[600px] mt-[300px]">
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}
