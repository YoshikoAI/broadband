import React from "react";
import styled from "styled-components";
import TechCrunchlogo from "../Logo/TechCrunchlogo";
import DailyExpresslogo from "../Logo/DailyExpresslogo";
import TheSunlog from "../Logo/TheSunlogo";
import TheTelegraphlogo from "../Logo/TheTelegraphlogo";

const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PageTitle = styled.p`
  font-size: 42px;
  font-weight: 800;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
  padding-left: 70px;
  padding-bottom: 50px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Ehoundstooth%3C/title%3E%3Cg fill='%239fa1a6' fill-opacity='0.11' fill-rule='evenodd'%3E%3Cpath d='M0 18h6l6-6v6h6l-6 6H0M24 18v6h-6M24 0l-6 6h-6l6-6M12 0v6L0 18v-6l6-6H0V0'/%3E%3C/g%3E%3C/svg%3E");
`;

const ReviewCard = styled.div`
  box-shadow: 9px 16px 16px rgba(147, 188, 199, 58);

  border-radius: 12px;
  width: 260px;
  height: 300px;
  background: hsla(138, 82%, 69%, 1);

  background: linear-gradient(
    90deg,
    hsla(138, 82%, 69%, 1) 0%,
    hsla(186, 100%, 50%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(138, 82%, 69%, 1) 0%,
    hsla(186, 100%, 50%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(138, 82%, 69%, 1) 0%,
    hsla(186, 100%, 50%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#6EF195", endColorstr="#00E3FD", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#8DE9D5", endColorstr="#32C4C0", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61F4DE", endColorstr="#6E78FF", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#57EBDE", endColorstr="#AEFB2A", GradientType=1 );
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 20px;
  margin-bottom: 70px;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`;

const HeaderText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding-left: 18px;
  padding-bottom: 5px;
`;

const BottomText = styled.p`
  font-size: 20px;
  color: #555;
  text-align: left;
  padding-left: 18px;
  padding-bottom: 5px;
  padding-right: 18px;
  padding-top: 10px;
  font-weight: 400;
  margin: 0px;
`;

const ReviewSection = () => {
  return (
    <Container>
      <PageTitle>Read all about us</PageTitle>
      <ReviewsContainer>
        <ReviewCard>
          <HeaderText>
            <TechCrunchlogo />
          </HeaderText>

          <BottomText size={30}>
            "RocketBand internet closes seed funding to disrupot UK brodband
            market"
          </BottomText>
        </ReviewCard>
        <ReviewCard>
          <HeaderText>
            <DailyExpresslogo />
          </HeaderText>

          <BottomText size={30}>
            "Challenger RocketBand internet argues that taxing broadband like a
            luxury item is regressive and wrong"
          </BottomText>
        </ReviewCard>
        <ReviewCard>
          <HeaderText>
            <TheSunlog />
          </HeaderText>

          <BottomText size={30}>
            "On a mission make broadband simple, for good"
          </BottomText>
        </ReviewCard>
        <ReviewCard>
          <HeaderText>
            <TheTelegraphlogo />
          </HeaderText>

          <BottomText size={30}>
            "We all need better broadband, for good"
          </BottomText>
        </ReviewCard>
      </ReviewsContainer>
    </Container>
  );
};

export default ReviewSection;
