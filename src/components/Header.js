import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
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
        <i class="fas fa-search"></i>
        <input></input>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.ul`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.li`
  color: red;
  font-weight: bold;
  font-size: 27px;
  margin: 0px 15px;
`;

const HeaderList = styled.li`
  color: #e5e5e5;
  font-size: 13px;
  margin: 0px 10px;
`;

const HeaderRight = styled.div``;
