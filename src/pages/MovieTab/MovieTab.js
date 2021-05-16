import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import axios from 'axios';

function MovieTab() {
  const apikey = '93b66484d69a9c74634ef4f9ba6f885e';
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const imgbaseUrl = 'https://image.tmdb.org/t/p/w500';
  const [popular, setPopular] = useState();

  const category = [
    '외국영화',
    '한국영화',
    'SF영화',
    '호러영화',
    '인디',
    '코미디',
  ];
  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const jsonData = await axios.request({
        method: 'GET',
        url: `${baseUrl}popular?api_key=${apikey}&language=ko-KR`,
      });
      setPopular(jsonData.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <MovieTabWrapper>
      <Header />
      <MovieContents>
        <MovieInfos>
          <InfoNavs>
            <label>영화</label>
            <select>
              <option>장르</option>
            </select>
          </InfoNavs>
          <InfoDetails>
            <img
              src='https://occ-0-3997-1009.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYQxL7-LvFyci9tra1RpQsc568NDHoVqXKkkoBDVmBcxsEnyAMw1nKmFmXADx-n87qREetxjy-OGzvGrkZbctxCKpk9ZIH3UabV8.webp?r=bde'
              alt='logo'
            />
            <label>오늘 대한민국에서 콘텐츠 순위 7위!</label>
            <span>
              모든것은 돈이 가득 든 가방과 돈에 바짝 목마른 인간들로 부터 시작
              됐다. <br /> 돈 앞에서 짐승이 되어가는 인간들의 끝은 어디인가?
            </span>
            <ButtonBox>
              <button>▶ 재생</button>
              <button>상세정보</button>
            </ButtonBox>
          </InfoDetails>
        </MovieInfos>
        {category.map((category, idx) => {
          return (
            <PopularContents key={idx}>
              <span>{category}</span>
              <PopularImages>
                {popular?.map((data, idx) => {
                  if (idx < 6)
                    return (
                      <img
                        key={idx}
                        src={`${imgbaseUrl}${data.backdrop_path}`}
                        alt=''
                      ></img>
                    );
                })}
              </PopularImages>
            </PopularContents>
          );
        })}
      </MovieContents>
    </MovieTabWrapper>
  );
}

export default MovieTab;

const PopularContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 25px;
    :hover {
      opacity: 1;
    }
    :nth-child(1) {
      margin-left: 50px;
      margin-bottom: 20px;
    }
  }
`;

const PopularImages = styled.div`
  > img {
    width: 315px;
    margin: 0 2px;
    :hover {
      transition: 0.2s ease-in-out;
      transition-delay: 0.5s;
      transform: scale(1.15);
      cursor: pointer;
    }
    :nth-child(1) {
      margin-left: 50px;
    }
  }
`;

const MovieTabWrapper = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 100%
    ),
    url('https://oc2-0-3997-1009.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABePNzCW5GdynZcsQNItEdV_w5em8EdzTnV9L6_HNEbIxtu_FdlrkAK5s2JZwDuSE0YcuYfESsnRSVtHAX0OFsfG9ydUy.webp?r=aa5');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  background-color: #141414;
`;

const MovieContents = styled.div``;

const MovieInfos = styled.div`
  margin-bottom: 350px;
`;

const InfoNavs = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0 0 50px;
  > label {
    font-size: 38px;
    font-weight: bold;
    color: white;
    margin-right: 50px;
  }
  > select {
    background-color: black;
    color: white;
    width: 87px;
    height: 26px;
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 0 50px;
  color: white;
  line-height: 1.25;
  > img {
    margin-bottom: 50px;
  }
  > label {
    font-size: 20px;
    font-weight: bold;
  }
  > span {
    font-size: 17px;
    margin: 20px 0 20px 0;
  }
`;

const ButtonBox = styled.div`
  > button {
    border: none;
    width: 150px;
    height: 50px;
    text-align: center;
    color: black;
    font-weight: bold;
    background-color: white;
    border-radius: 300px;
    margin-right: 20px;
    :hover {
      opacity: 0.8;
    }
    :nth-child(2) {
      background-color: gray;
      color: white;
    }
  }
`;
