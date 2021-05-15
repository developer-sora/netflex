import React from "react";
import styled from "styled-components";

function HomeContents() {
  return (
    <HomeContentsWrapper>
      <MainContents>
        <MainInfo>
          <MainInfoText>
            <img src="https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSILQAwj_IfGmi7azA8CFEIxyW7TeAhcdEnWJUc71gaPUP76AU_XK5plbz1o7qdHoyKdUeNaf9jw2kZm4oi8SJaRWvePWAE7swJt.webp?r=a5a"></img>
            <Synopsis>
              풍선으로 날기, 낙하산 없이 점프하기, 케이블카 사이로 걷기. 묘기에
              미친 사람들의 신박한 도전들. 무모해 보여도 나름 과학까지
              동원한단다. 그래도 절대 따라 하진 말 것!
            </Synopsis>

            <PlayButton>▶ 재생</PlayButton>
            <InfoButton>상세정보</InfoButton>
          </MainInfoText>
        </MainInfo>
        <TopTen></TopTen>
      </MainContents>

      <RisingContents></RisingContents>
    </HomeContentsWrapper>
  );
}

export default HomeContents;

const HomeContentsWrapper = styled.section``;

const MainContents = styled.div`
  background-image: url("https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWpf6NV0NBWGwkJ_JoSz8LL4klob7_D_zFdF21KKg3nkR7xHug6K-GQvLGfm39JLE0MbyMTgShfnFeHNxUjwVLslwrzc.webp?r=511");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
const MainInfo = styled.div`
  height: 70%;
  padding: 100px 0 0 50px;
`;

const MainInfoText = styled.div`
  width: 36%;
  height: 364px;
`;

const Synopsis = styled.div`
  color: white;
  font-size: 27px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  padding: 25px 0 0 0;
`;

const TopTen = styled.div`
  border: 0px solid red;
  height: 30vh;
`;
const RisingContents = styled.div``;

const PlayButton = styled.button`
  margin: 20px 10px 0 0;
  padding: 15px 50px;
  background-color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const InfoButton = styled(PlayButton)`
  background-color: rgba(128, 128, 128, 0.8);
  color: white;
`;
