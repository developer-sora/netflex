import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useLocation, useHistory } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const pathName = useLocation().pathname;
  let history = useHistory();
  const menus = [
    { name: "홈", path: "/" },
    { name: "TV프로그램", path: "/tv" },
    { name: "영화", path: "/movie" },
    { name: "NEW 요즘 대세 콘텐츠", path: "/new" },
    { name: "내가 찜한 콘텐츠", path: "/zzim" },
  ];
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderLogo onClick={() => history.push(menus[0].path)}>
          NETFLEX
        </HeaderLogo>
        <HeaderList
          onClick={() => history.push(menus[0].path)}
          isActive={pathName === "/"}
        >
          {menus[0].name}
        </HeaderList>
        <HeaderList
          onClick={() => history.push(menus[1].path)}
          isActive={pathName === "/tv"}
        >
          {menus[1].name}
        </HeaderList>
        <HeaderList
          onClick={() => history.push(menus[2].path)}
          isActive={pathName === "/movie"}
        >
          {menus[2].name}
        </HeaderList>
        <HeaderList
          onClick={() => history.push(menus[3].path)}
          isActive={pathName === "/new"}
        >
          {menus[3].name}
        </HeaderList>
        <HeaderList
          onClick={() => history.push(menus[4].path)}
          isActive={pathName === "/zzim"}
        >
          {menus[4].name}
        </HeaderList>
      </HeaderLeft>
      <HeaderRight>
        <i
          onClick={() => setClicked(!clicked)}
          className="fas fa-search"
          style={{ color: "white" }}
        ></i>
        <SearchInput
          openSearchBox={clicked === true}
          placeholder="제목,사람,장르"
        ></SearchInput>
        <i
          className="fas fa-bell"
          style={{ color: "white", margin: "0px 20px" }}
        ></i>
        <i
          className="fas fa-bars"
          style={{ color: "white", marginRight: "20px" }}
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
  position: sticky;
  top: 0;
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
  cursor: pointer;
`;

const HeaderList = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin: 0px 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :nth-child() {
  }
  ${(props) =>
    props.isActive &&
    css`
      color: white;
      font-weight: bold;
      :hover {
        opacity: 1;
      }
    `};
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
