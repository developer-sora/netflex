import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HomeContents from "./HomeContents/HomeContents";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContents />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
