"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Buttons = () => {
  return (
    <>
      <ButtonWrapper>
        <button
          onClick={() => console.log("Clicked")}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
          }}
        >
          <Image
            src="/Add_to_Google_Wallet_badge.svg.png"
            alt="Google Wallet"
            width={150}
            height={50}
          />
        </button>
        <button
          onClick={() => console.log("Clicked too")}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
          }}
        >
          <Image
            src="/add-to-apple-wallet-logo.png"
            alt="Apple Wallet"
            width={160}
            height={50}
          />
        </button>
      </ButtonWrapper>
    </>
  );
};

export default Buttons;
