import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../constans/menus";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-400 w-80 px-3 py-10">
      <div className="text-slate-100 text-3xl font-bold border-2 rounded text-center mb-3 hover:bg-slate-300">
        <Link to="/">Virtual Spirit</Link>
      </div>
      {menus.map((item, index) => (
        <Link
          to={item.path}
          className="py-2 px-5 flex gap-x-2 font-semibold text-slate-100 hover:bg-slate-300 rounded items-center"
          key={index}
        >
          <div className="w-7 h-7">{item.icon}</div>
          <div to={item.path}>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};
