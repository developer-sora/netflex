import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HomeContents from "../pages/HomeContents/HomeContents";

function Home() {
  const [saveIndex, setSaveIndex] = useState();
  return (
    <HomeWrapper>
      <Header />
      <HomeContents />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
