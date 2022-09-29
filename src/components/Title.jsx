import React from "react";

export const Title = ({ title, action }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <h1 className="text-slate-600 font-bold text-3xl">{title}</h1>
      <button
        onClick={action}
        className="bg-blue-400 hover:bg-blue-600 text-slate-100 font-bold py-2 px-4 rounded"
      >{`Add ${title}`}</button>
    </div>
  );
};
