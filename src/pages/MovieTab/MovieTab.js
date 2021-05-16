import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

function MovieTab() {
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
              <button>재생</button>
              <button>상세정보</button>
            </ButtonBox>
          </InfoDetails>
        </MovieInfos>
      </MovieContents>
    </MovieTabWrapper>
  );
}

export default MovieTab;

const MovieTabWrapper = styled.div`
  background-image: url('https://occ-0-3997-1009.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV7ZLcj58aR1ecCOTcF2PY50ERgTuHxCFZrg8DcT4QpgTIo2S-PRkSUN1Q4GcEZygzxrI2g8B-e18NxiVzzQktk-PKLh.webp?r=2e3');
  background-size: 100%;
  height: 100vh;
  width: 100%;
`;

const MovieContents = styled.div``;

const MovieInfos = styled.div``;

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
