import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeContents from '../pages/HomeContents/HomeContents';

function Home() {
  return (
    <HomeWrapper>
      <HomeContents />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
