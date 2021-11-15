import { Copyright } from "@material-ui/icons";
import React from "react";
import styled, { css } from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <SocialLinks>
        <i
          class="fab fa-facebook-square fa-2x"
          style={{ marginRight: "20px" }}
        ></i>
        <i class="fab fa-instagram fa-2x" style={{ marginRight: "20px" }}></i>
        <i class="fab fa-twitter fa-2x" style={{ marginRight: "20px" }}></i>
        <i class="fab fa-youtube fa-2x"></i>
      </SocialLinks>
      <FooterLinks>
        <FooterLink>
          <a> 자막 및 음성 </a>
        </FooterLink>
        <FooterLink>
          <a> 음성 지원 </a>
        </FooterLink>
        <FooterLink>
          <a> 고객 센터 </a>
        </FooterLink>
        <FooterLink>
          <a> 기프트 카드 </a>
        </FooterLink>
        <FooterLink>
          <a> 미디어 센터 </a>
        </FooterLink>
        <FooterLink>
          <a> 투자 정보(IR) </a>
        </FooterLink>
        <FooterLink>
          <a> 입사 정보 </a>
        </FooterLink>
        <FooterLink>
          <a> 이용 약관 </a>
        </FooterLink>
        <FooterLink>
          <a> 개인 정보 </a>
        </FooterLink>
        <FooterLink>
          <a> 법적 고지 </a>
        </FooterLink>
        <FooterLink>
          <a> 쿠키 설정 </a>
        </FooterLink>
        <FooterLink>
          <a> 회사 정보 </a>
        </FooterLink>
      </FooterLinks>
      <ServiceLink> 서비스 코드 </ServiceLink>
      <CopyRights>
        <CopyRight>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 00-308-321-0058
        </CopyRight>
        <CopyRight>대표: 레지널드 숀 톰프슨</CopyRight>
        <CopyRight>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </CopyRight>
        <CopyRight>사업자등록번호: 165-87-00119</CopyRight>
        <CopyRight>클라우드 호스팅: Amazon Web Services Inc.</CopyRight>
      </CopyRights>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  max-width: 980px;
  margin: 100px auto 0;
  padding: 0 4%;
  color: grey;
`;
const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 1em;
  align-items: center;
  cursor: pointer;
`;

const FooterLinks = styled.ul`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px 0;
  padding: 0;
`;

const FooterLink = styled.li`
  flex-basis: 25%;
  margin-bottom: 21px;
  flex: 0 0 25%;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const ServiceLink = styled.button`
  display: block;
  margin-bottom: 20px;
  font-size: 13px;
  padding: 0.5em;
  background: 0 0;
  color: grey;
  border: solid 1px grey;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

const CopyRights = styled.div`
  display: block;
`;

const CopyRight = styled.div`
  font-size: 11px;
  margin-top: 6px;
`;
