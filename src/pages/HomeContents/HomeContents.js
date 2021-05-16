import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: 9999,
        left: "30px",
      }}
      onClick={onClick}
    />
  );
}

function HomeContents() {
  const apikey = "93b66484d69a9c74634ef4f9ba6f885e";
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const imgbaseUrl = "https://image.tmdb.org/t/p/w500";
  const [popular, setPopular] = useState();

  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 5,
    // slidesToScroll: 6,
    centerMode: true,
    slidesPerRow: 6,
    // rows: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
      <Header></Header>
      <MainContents>
        <MainInfo>
          <MainInfoText>
            <img
              src="https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXd0a3s0wUU1XKFmp9Ea25jKzoBk4vhe48W1xPwoaOiADDJr782wKze1wLYR7v4ehiY19U0uUvz79tJZjc62E5KJkkwi6YXGNJ3-n1olWqU472KGl5t3NEHpFbkQh7HuuV9dXcKzpVYfLhmdStUiTRx3PS9Ca_pLFuYqQo6BMGYsEQ.webp?r=668"
              alt="thumbnail"
            ></img>
            <Synopsis>{popular && popular[0].overview}</Synopsis>
            <PlayButton>▶ 재생</PlayButton>
            <InfoButton>
              <i class="fas fa-info-circle"></i> 상세정보
            </InfoButton>
          </MainInfoText>
        </MainInfo>
        <TopTen>
          <TopTenText>최신 등록 콘텐츠</TopTenText>
          <PopularImages>
            <Slider {...settings}>
              {popular?.map((data, idx) => {
                if (idx < 18)
                  return (
                    <PopularData
                      key={idx}
                      src={`${imgbaseUrl}${data.backdrop_path}`}
                      alt=""
                    ></PopularData>
                  );
              })}
            </Slider>
          </PopularImages>
        </TopTen>
      </MainContents>

      <RisingContents></RisingContents>
    </HomeContentsWrapper>
  );
}

export default HomeContents;

const PopularImages = styled.div``;

const PopularData = styled.img`
  width: 315px;
  border-radius: 7px;
  :hover {
    transition: 0.2s;
    transform: scale(1.2); /*  default */
    -webkit-transform: scale(1.3); /*  크롬 */
    -moz-transform: scale(1.3); /* FireFox */
    -o-transform: scale(1.3); /* Opera */
    cursor: pointer;
  }
`;

const HomeContentsWrapper = styled.section`
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%),
    url("https://occ-0-2218-3996.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXtAvb7sp66bv3HcJgl-ZpS72c-ZQ6sCTFpPFRSmB_ryszpXuYXrhG4V122JupsdaUDtYYJBSvA-GozUbeuEAmuite-H.webp?r=8dd");
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #141414;
  padding-bottom: 40%;
`;

const MainContents = styled.div``;

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
  display: flex;
  flex-direction: column;
  margin-top: 350px;
`;

const TopTenText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-left: 60px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    color: white;
  }
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
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const InfoButton = styled(PlayButton)`
  background-color: rgba(128, 128, 128, 0.8);
  color: white;
`;
