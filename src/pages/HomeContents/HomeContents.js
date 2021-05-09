import React from 'react';
import styled from 'styled-components';

function HomeContents() {
  return (
    <HomeContentsWrapper>
      <MainContents>
        <MainInfo></MainInfo>
        <TopTen></TopTen>
      </MainContents>

      <RisingContents></RisingContents>
    </HomeContentsWrapper>
  );
}

export default HomeContents;

const HomeContentsWrapper = styled.section``;
const MainContents = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 100%;
  background-image: url('https://occ-0-3997-1009.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXI4nSRAcXnVAqr0lW7vNo4reIhNjCjvihF2ItsIlPn2da6JJQAGNgJOofyF5SqV6xIQky5kAih--ZIrCm5aQa8R1xDw.webp?r=9ed');
  background-repeat: no-repeat;
  background-size: 100%;
`;
const MainInfo = styled.div`
  height: 70vh;
`;
const TopTen = styled.div`
  border: 1px solid red;
  height: 30vh;
`;
const RisingContents = styled.div``;
