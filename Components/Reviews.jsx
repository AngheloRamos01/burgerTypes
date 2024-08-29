"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { SwiperCustomButtons } from "./SwiperCustomButtons";
import Rating from "./Rating";

const Reviews = () => {
  const items = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      content: "So yummy, so Juicy, yet not greesy",
      name: "Mark Mark Jr.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1565556250012-df4770229a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      content: "It taste like heaven",
      name: "Glamourous",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1564758913551-7212727c4b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      content: "Instagramable",
      name: "Fabolous",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1564758913551-7212727c4b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4,
      content: "Its my new Favourite, gonna go back here again",
      name: "Fabolous",
    },
  ];

  return (
    <section className="m-10  text-white" name="Reviews">
      <div className="text-center  text-white">Reviews</div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        spaceBetween={0}
      >
        {items.map((item) => (
          <SwiperSlide key={item?.id} className="md:ml-10">
            <div className="inline-flex mt-5 items-center justify-center">
              <div className="flex-cols md:flex ">
                {/* Image container */}
                <div>
                  <img
                    src={item.img}
                    alt="eating"
                    className="rounded-lg h-[200px] w-[400px] md:h-[530px] md:w-[800px] object-cover object-center "
                  />
                </div>
                {/* content container */}
                <div className="md:mx-10">
                  <h2 className="capitalize md:w-[35%] text-4xl mb-5 font-kottaOne">
                    Hear from our happy customer
                  </h2>
                  <Rating rating={item.rating} />
                  <p className="md:my-20 text-[#A09E9E]">{item.content}</p>

                  <p className="mt-10 md:mt-64">{item.name}</p>
                  <p className="text-[#A5A0A0]">Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex items-end justify-end gap-6">
          <SwiperCustomButtons />
        </div>
      </Swiper>
    </section>
  );
};

export default Reviews;
