"use client";

import React from "react";
import Buttons from "../components/Buttons";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const FoodPage = () => {
  return (
    <>
      <Wrapper>
        <Title>FoodPage</Title>
        <Buttons />
      </Wrapper>
    </>
  );
};

export default FoodPage;
