"use client";
import React from "react";
import Buttons from "../components/Buttons";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled("div")`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const RightDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  flex: 1.5;
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;
const LeftDiv = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1.8;
  height: 100vh;
  }
`;
const FoodPage = () => {
  return (
    <>
      <StyledContainer>
        <LeftDiv>
          <Image
            src="/restaurant.jpg"
            alt="Restaurant"
            layout="fill"
            objectFit="cover"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </LeftDiv>
        <RightDiv>
          <Buttons />
        </RightDiv>
      </StyledContainer>
    </>
  );
};

export default FoodPage;
