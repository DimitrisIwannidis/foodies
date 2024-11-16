"use client";
import React from "react";
import Buttons from "../components/Buttons";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled("div")`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  background: black;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightDiv = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;

  @media (max-width: 768px) {
    flex: 1;
    padding: 15px;
    text-align: center;
  }
`;
const LeftDiv = styled("div")`
  flex: 1.8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 1;
    height: 40vh;
  }
`;

const StyledParagraph = styled("p")`
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #333;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 10px;
    max-width: 90%;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  z-index: 10;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px 0;
    background-color: black;
  }
`;
const StyledParagraphContainer = styled("div")`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
          <ButtonContainer>
            <Buttons />
          </ButtonContainer>
          <StyledParagraphContainer>
            <StyledParagraph>
              Welcome to our restaurant! Enjoy a delightful dining experience
              with exquisite dishes crafted from the freshest ingredients.
              Welcome to our restaurant! Enjoy a delightful dining experience
              with exquisite dishes crafted from the freshest ingredients.
              Welcome to our restaurant! Enjoy a delightful dining experience
              with exquisite dishes crafted from the freshest ingredients.
            </StyledParagraph>
          </StyledParagraphContainer>
        </RightDiv>
      </StyledContainer>
    </>
  );
};

export default FoodPage;
