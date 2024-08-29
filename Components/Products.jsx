"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaHeart, FaStar } from "react-icons/fa";

const Products = () => {
  const responsive = {
    3000: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    464: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };
  const products = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      like: 100,
      title: "Regular Burger",
      desc: "Tasty, delicious, and has me craving more on the first bite.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      like: 100,
      title: "Special Burger",
      desc: "“Juicy, mouthwatering, tasty, and everything you’d ever want to savor",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      like: 100,
      title: "Friendship",
      desc: "Enjoy every moment, Taste that you will never forget",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      like: 100,
      title: "Wombo Jumbo",
      desc: "Its big, its large, every bite you'll crave for more",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      like: 100,
      title: "The Gigantic",
      desc: "So large, a taste the you'll never forget",
    },
  ];
  return (
    <div className="text-white mx-20  md:my-16 md:mx-16" name="Products">
      <div>
        <h2 className="flex items-center justify-center my-5 font-kottaOne text-4xl ">
          Products
        </h2>
      </div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        breakpoints={responsive}
      >
        {products.map((product) => (
          <SwiperSlide>
            <div
              className="relative flex pt-16 md:ml-10 lg:ml-20 "
              key={product?.id}
            >
              <div className="h-72 w-52 md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]  bg-[#323232] rounded-xl">
                <img
                  src={product?.src}
                  alt="product 1"
                  className="absolute top-4 md:top-0 left-[26%] md:left-[30%]  rounded-full h-24 w-24 md:h-38 md:w-38 lg:h-52 lg:w-52  object-cover object-center"
                />
                <div className="flex items-center justify-between mx-5 md:mx-14 pt-5">
                  <div className="flex flex-col items-center justify-center">
                    <FaStar size={20} />
                    <span>{product?.rating}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaHeart size={20} />
                    <span>{product?.like}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-10 md:mt-32 text-lg md:text-2xl">
                  <span>{product?.title}</span>
                </div>
                <div>
                  <p className="text-center px-5 text-2xl md:mt-10">
                    {product?.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
