import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

function Header() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderLogo>NETFLEX</HeaderLogo>
        <HeaderList>홈</HeaderList>
        <HeaderList>TV프로그램</HeaderList>
        <HeaderList>영화</HeaderList>
        <HeaderList>NEW 요즘 대세 콘텐츠</HeaderList>
        <HeaderList>내가 찜한 콘텐츠</HeaderList>
      </HeaderLeft>
      <HeaderRight>
        <i
          onClick={() => setClicked(!clicked)}
          className='fas fa-search'
          style={{ color: 'white' }}
        ></i>
        <SearchInput
          openSearchBox={clicked === true}
          placeholder='제목,사람,장르'
        ></SearchInput>
        <i
          className='fas fa-bell'
          style={{ color: 'white', margin: '0px 20px' }}
        ></i>
        <i
          className='fas fa-bars'
          style={{ color: 'white', marginRight: '20px' }}
        ></i>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 68px;
`;

const HeaderLeft = styled.ul`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.li`
  color: red;
  font-weight: bold;
  font-size: 27px;
  margin: 0 30px 0 50px;
`;

const HeaderList = styled.li`
  color: #e5e5e5;
  font-size: 13px;
  margin: 0px 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :nth-child() {
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

// const dropDown = keyframes`
// from{
//   transform: translate(0px, 0px);
// }

// to {
//   transform: translate(-265px, 0px);
// }
// `;

const SearchInput = styled.input`
  display: none;

  background-color: black;
  border: 1px solid #e5e5e5;
  height: 36px;
  width: 265px;
  padding-left: 15px;
  ${(props) =>
    props.openSearchBox &&
    css`
      transition: 0.8s;
      display: block;
    `};
`;
