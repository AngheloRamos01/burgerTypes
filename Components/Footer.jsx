"use client";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Products" },
    { id: 3, link: "Services" },
    { id: 4, link: "Reviews" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="bg-[#0D0D0D] py-10 px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between border-b-4 border-[#505050] pb-5">
        <div>
          <div className="flex items-center ">
            <img
              src="https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-white px-5">TLK</h1>
          </div>
          <div>
            <p>@2023 All rights reserved.</p>
          </div>
        </div>
        <div>
          {links.map(({ id, link }) => (
            <div key={id}>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-3">
            <MdLocationPin size={30} />
            2600 Baguio City, Benguet, Philippines
          </div>
          <div>
            <span>Follow on:</span>
            <div className="flex gap-5">
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5">
          <div>
            <HiOutlineMail size={20} />
            <p>example@gmail.com</p>
          </div>
          <div>
            <IoIosCall size={20} />
            <p>0912-345-6789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
