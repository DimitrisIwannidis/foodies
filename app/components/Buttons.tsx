"use client";

import React from "react";

const Buttons = () => {
  return (
    <>
      <button onClick={() => console.log("Clicked")}>Google Wallet</button>
      <button onClick={() => console.log("Clicked too")}>Apple Wallet</button>
    </>
  );
};

export default Buttons;
