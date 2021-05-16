import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function HomeContents() {
  const apikey = "93b66484d69a9c74634ef4f9ba6f885e";
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const imgbaseUrl = "https://image.tmdb.org/t/p/w500";
  const [popular, setPopular] = useState();
  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const jsonData = await axios.request({
        method: "GET",
        url: `${baseUrl}popular?api_key=${apikey}&language=ko-KR`,
      });
      setPopular(jsonData.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(popular);
  return (
    <HomeContentsWrapper>
      <MainContents>
        <MainInfo>
          <MainInfoText>
            <img
              src="https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSILQAwj_IfGmi7azA8CFEIxyW7TeAhcdEnWJUc71gaPUP76AU_XK5plbz1o7qdHoyKdUeNaf9jw2kZm4oi8SJaRWvePWAE7swJt.webp?r=a5a"
              alt="thumbnail"
            ></img>
            <Synopsis>{popular && popular[0].overview}</Synopsis>
            <PlayButton>▶ 재생</PlayButton>
            <InfoButton>상세정보</InfoButton>
          </MainInfoText>
        </MainInfo>
      </MainContents>
      <TopTen>
        {popular?.map((data, idx) => {
          if (idx < 6)
            return (
              <PopularImages key={idx}>
                <img src={`${imgbaseUrl}${data.backdrop_path}`} alt=""></img>
              </PopularImages>
            );
        })}
      </TopTen>

      <RisingContents></RisingContents>
    </HomeContentsWrapper>
  );
}

export default HomeContents;

const PopularImages = styled.div`
  > img {
    width: 315px;
  }
`;
const HomeContentsWrapper = styled.section``;

const MainContents = styled.div`
  background-image: url("https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWpf6NV0NBWGwkJ_JoSz8LL4klob7_D_zFdF21KKg3nkR7xHug6K-GQvLGfm39JLE0MbyMTgShfnFeHNxUjwVLslwrzc.webp?r=511");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
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
  line-height: 1.25;
`;

const TopTen = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 1;
  display: flex;
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
