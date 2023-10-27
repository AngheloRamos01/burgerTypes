import React from "react";

const Home = () => {
  return (
    <div
      className="relative h-[300px] md:h-[500px] lg:h-[845px] w-screen bg-hero-pattern bg-cover bg-center md:pt-14 lg:pt-24 text-white"
      name="Home"
    >
      <div className=" absolute mt-5  md:mt-10 lg:mt-20 ml-5 md:ml-10 lg:ml-20">
        <p className="mt-5 md:mt-7 lg:mt-10  text-xs md:text-base lg:text-xl font-italianno">
          Lorem Ipsum
        </p>
        <h2 className="mt-5 md:mt-7 lg:mt-10 text-lg md:text-3xl lg:text-5xl pr-[35%] tracking-[5px] md:tracking-[15px] lg:tracking-[30px] leading-loose font-kottaOne">
          Every Bite Taste Like Heaven
        </h2>
        <p className="mt-5 md:mt-7 lg:mt-10 mr-[50%] text-xs md:text-base lg:text-xl font-kottaOne">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
    </div>
  );
};

export default Home;
