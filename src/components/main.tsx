"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

export const Main = () => {
  const [number, setNumber] = useState<number>(0);

  

  return (
    <>
      <main className="h-[100vh] flex flex-col w-fit m-auto justify-center">
        <p className="text-end text-white text-4xl py-4 pr-4">{number}</p>
        <div className="grid grid-cols-4 gap-2">
          <Button className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white">
            C
          </Button>
          <Button className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white">
            &plusmn;
          </Button>
          <Button className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white">
            %
          </Button>
          <Button className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold ">
            &divide;
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            7
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            8
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            9
          </Button>
          <Button className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold">
            &times;
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            4
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            5
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            6
          </Button>
          <Button className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold">
            -
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            1
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            2
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            3
          </Button>
          <Button className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold">
            +
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            0
          </Button>
          <Button className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold">
            .
          </Button>
          <Button className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold">
            =
          </Button>
        </div>
      </main>
    </>
  );
};
