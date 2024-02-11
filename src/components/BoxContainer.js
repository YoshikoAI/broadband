import React from "react";
import styled from "styled-components";
import { SlRocket } from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineHandshake } from "react-icons/md";

const Container = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: "column";
  flex-wrap: wrap;
  background-color: #f5f7f0;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23aaaeaa' fill-opacity='0.31' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

  /* background-image: url("https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); */
`;

const Box = styled.div`
  box-shadow: 9px 16px 16px rgba(147, 188, 199, 58);
  border-radius: 12px;
  border: #ccc 1px solid;
  width: 260px;
  height: 320px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 10px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.6);
  background-color: #eaafe7;
  background-color: #dfe4c3;
  background-color: #fdfef7;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23efe18b' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  /* background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23c1dafe' fill-opacity='0.54' fill-rule='evenodd'/%3E%3C/svg%3E"); */
  /* background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23c1dafe' fill-opacity='0.54' fill-rule='evenodd'/%3E%3C/svg%3E"); */
`;

const CenterText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  padding-top: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #0044ff;
  /* font-family: "Bungee", sans-serif; */
  /* font-family: 'Damion', cursive; */
  /* font-family: "DM Serif Display", serif; */
  user-select: none;
  /* font-family: 'Honk', system-ui; */
  /* font-family: "Press Start 2P", system-ui; */
  /* font-family: 'Silkscreen', sans-serif; */
  /* font-family: "Source Code Pro", monospace; */
`;

const BottomText = styled.p`
  font-size: 18px;
  color: #222;
  text-align: left;
  font-weight: 400;
  margin: 0px;
  user-select: none;
`;

const BoxContainer = () => {
  return (
    <Container>
      <Box>
        <SlRocket
          style={{
            color: "#FFCC00",
            transform: "scale(1.2)",
            position: "relative",
            top: 7,
          }}
          size={50}
        />

        <CenterText>Speeds up to 900Mb</CenterText>
        <BottomText>
          Full fibre speeds that easily handle all the streaming, gaming and
          WFHing you can throw at it.
        </BottomText>
      </Box>
      <Box>
        <GrAchievement
          style={{
            color: "#FFCC00",
            transform: "scale(1.2)",
            position: "relative",
            top: 7,
          }}
          size={50}
        />

        <CenterText>Voted #1 for our service</CenterText>
        <BottomText>
          We’ve topped MoneySavingExpert’s broadband poll for customer
          service... twice!
        </BottomText>
      </Box>
      <Box>
        <MdOutlineHandshake
          style={{
            color: "#FFCC00",
            transform: "scale(1.2)",
            position: "relative",
            top: 7,
          }}
          size={50}
        />

        <CenterText>Fair prices, always</CenterText>
        <BottomText>
          No out-of-contract price hikes or hidden fees. Plus, our bills show
          you exactly what you're paying for.
        </BottomText>
      </Box>
    </Container>
  );
};

export default BoxContainer;
