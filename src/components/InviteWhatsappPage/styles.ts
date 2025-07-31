import styled, { keyframes } from "styled-components";

const pulseButton = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 #29CC29;
  }
  80% {
    transform: scale(1.05);
    box-shadow: 0 0 24.4px 0 #29CC29;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 #29CC29;
  }
`;

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #1b1d1f;
  background-blend-mode: multiply;
  position: relative;
`;

export const HeaderContainer = styled.header`
  background-color: #db2831;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 55px);
  justify-content: center;
  align-items: center;
`;

export const CentralContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 62px;
  align-items: center;

  @media (max-width: 600px) {
    position: absolute;
    top: 275px;
  }
`;

export const CardWithBackground = styled.div`
  position: relative;
`;

export const BackgroundProductsImage = styled.img`
  position: absolute;
  width: 351px;
  height: 351px;
  bottom: 130px;

  @media (max-width: 600px) {
    bottom: 146px;
  }
`;

export const GroupCard = styled.div`
  display: flex;
  padding: 24px 16px 31px 16px;
  align-items: center;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;
`;

export const CardContentWrapper = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`;

export const GroupLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 99px;
  border: 1px solid #fff;
`;

export const GroupName = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

export const JoinGroupButton = styled.a`
  display: flex;
  width: 282px;
  padding: 21px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  background: linear-gradient(90deg, #1a8d1a 0%, #29cc29 100%);
  border: none;
  cursor: pointer;

  animation: ${pulseButton} 2s infinite;

  &:hover {
    background: linear-gradient(90deg, #1a8d1a 0%, #29cc29 100%);
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const GroupInfoSection = styled.div`
  display: flex;
  width: 271px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 24px;
    }
  }
`;
export const AnimatedVacancies = styled.h2<{ isAnimating: boolean }>`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  margin: 0;
  overflow: hidden;
  position: relative;

  .animated-number {
    animation: ${slideDown} 0.6s ease-out;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const AnimatedPhone = styled.p<{ isAnimating: boolean }>`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  animation: ${(props) => (props.isAnimating ? fadeIn : "none")} 1.2s
    cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CopyrightText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  bottom: 134px;

  @media (max-width: 600px) {
    bottom: 54px;
  }
`;
