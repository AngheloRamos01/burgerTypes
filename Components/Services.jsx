"use client";
import React from "react";

const Services = () => {
  return (
    <div className="mx-20 text-white my-10" name="Services">
      <div className="flex items-center justify-center text-white py-10">
        <h2>Services</h2>
      </div>
      <div className="grid grid-cols-1 md:flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1613453030956-2c433b6b5aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluZSUyMGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="dine in"
          className="h-52 w-full md:h-72 md:w-[40%] rounded-xl object-cover object-bottom"
        />
        <div className="text-center md:w-[30%]">
          <h3 className="py-10">Dine-in</h3>
          <p>
            You can enjoy our beautiful yet exquisite place where the staff is
            accomodating and friendly
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:flex justify-center mt-28">
        <div className="text-center md:w-[30%] order-2 md:order-1">
          <h3 className="py-10">Delivery</h3>
          <p>
            Hussle in going out? Stress in looking for a transportaion? fear not
            for we'll deliver it to your doorstep. Just call and order.
          </p>
        </div>
        <img
          src=" https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="dine in"
          className="h-52 w-full md:h-72 md:w-[40%] rounded-xl object-cover object-top order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default Services;
