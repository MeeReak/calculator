"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Main = () => {
  const [currValue, setCurrValue] = useState<string>("");
  const [prevValue, setPrevValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  useEffect(() => {
    const numbers = currValue.split(operator);
    if (numbers.length === 2) {
      setFirstNumber(parseFloat(numbers[0]));
      setSecondNumber(parseFloat(numbers[1]));
    }
  }, [currValue, operator]);

  const operatorRegex = /[+\-×÷%]/;

  function handleNumber(e: React.MouseEvent<HTMLButtonElement>) {
    const value = e.currentTarget.innerHTML;

    if (operatorRegex.test(value)) {
      handleOperator(value);
    } else {
      handleDigit(value);
    }
  }

  function handleOperator(value: string) {
    if (operator) {
      if (firstNumber && secondNumber && operator !== "") {
        handleResult();
      }
    } else if (currValue) {
      setOperator(value);
      setCurrValue((pre) => pre + value);
    }
  }

  function handleDigit(value: string) {
    if (prevValue) {
      secondNumber && setCurrValue((pre) => pre + value);
      currValue.endsWith(operator) && setCurrValue((pre) => pre + value);
      if (currValue && operator == "") {
        setCurrValue(value);
        setPrevValue("");
      }
    } else {
      if (currValue.includes(".") && value === ".") {
        return;
      }
      setCurrValue((prev) => prev + value);
    }
  }

  function handleResult() {
    if (!operator) return;

    let result = 0;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "×":
        result = firstNumber * secondNumber;
        break;
      case "÷":
        result = firstNumber / secondNumber;
        break;
      case "%":
        result = firstNumber % secondNumber;
        break;
      default:
        return;
    }

    setCurrValue(result.toString());
    setOperator("");
    setFirstNumber(result);
    setSecondNumber(0);
    setPrevValue(currValue);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <main className="w-[230px] relative">
          <p className="text-end text-white text-lg absolute right-0">
            {currValue && prevValue}
          </p>
          <p className="text-end text-white text-4xl pb-4 pt-7">{currValue}</p>
          <div className="grid grid-cols-4 gap-2 w-fit fixed top-[15%]">
            <Button
              onClick={() => {
                setCurrValue("");
                setPrevValue("");
                setOperator("");
                setFirstNumber(0);
                setSecondNumber(0);
              }}
              className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white"
            >
              C
            </Button>
            <Button className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white">
              &plusmn;
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#a8a8a8] text-[#171717] h-[50px] px-5 font-semibold hover:text-white"
            >
              %
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold "
            >
              &divide;
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              7
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              8
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              9
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              value={"*"}
              className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold"
            >
              &times;
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              4
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              5
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              6
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold"
            >
              -
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              1
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              2
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              3
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold"
            >
              +
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              0
            </Button>
            <Button
              onClick={(e) => {
                handleNumber(e);
              }}
              className="rounded-full bg-[#383838] h-[50px] px-5 font-semibold"
            >
              .
            </Button>
            <Button
              onClick={() => {
                handleResult();
              }}
              className="rounded-full bg-[#ff9a0d] h-[50px] px-5 font-semibold"
            >
              =
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};
