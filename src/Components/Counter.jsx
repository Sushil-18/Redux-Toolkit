import React from "react";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/index.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="bg-white flex flex-col gap-3 items-center justify-center w-[60%] mx-auto border-transperant rounded-xl mt-16 py-4">
      <p className="text-black text-xl font-semibold"> Redux Counter</p>
      <p className="text-black">{counter}</p>
      <div className="flex flex-row gap-4">
        <Button buttonName="Increment" onClick={incrementHandler} />
        <Button buttonName="Decrement" onClick={decrementHandler} />
      </div>
      <Button buttonName="Toggle Counter" />
    </div>
  );
};

export default Counter;
