"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [toggled, setToggled] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Products" },
    { id: 3, link: "Services" },
    { id: 4, link: "Reviews" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="bg-[#0D0D0D]">
      <div className="flex items-center justify-between py-4 px-10">
        <div className="flex items-center justify-center ">
          <img
            src="https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="logo"
            className="h-14 w-14 rounded-full"
          />
          <h1 className="text-white px-5">TLK</h1>
        </div>
        <div>
          <ul className="hidden lg:flex gap-5 ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setToggled(!toggled)} className="flex lg:hidden ">
            {toggled ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {toggled && (
        <ul className="flex lg:hidden flex-col items-center gap-5 py-5">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
