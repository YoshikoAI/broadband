import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  padding-bottom: 160px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
`;

const PageTitle = styled.p`
  font-size: 38px;
  font-weight: 700;
  /* font-family: "Bungee", sans-serif; */
  /* font-family: "DM Serif Display", serif; */
  letter-spacing: 0.7px;
  /* font-family: "Honk", system-ui; */
  /* font-family: "Press Start 2P", system-ui; */
  /* font-family: "Silkscreen", sans-serif; */
`;

const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  background: white;
  color: black;
  border-radius: 14px;
  outline: none;
  border: #ccc 1px solid;
  padding: 14px;
  height: 55px;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.4;
    transform: scale(1.02);
  }
  cursor: pointer;
`;

const InfoSection = () => {
  return (
    <Container>
      <PageTitle>Serving up full fibre (and full fibre only)</PageTitle>
      <Subtitle>
        <p>
          We don’t use older, copper wire connections that come from those green
          cabinets on the street, because they’re so much slower and breakdown
          far too easily.
        </p>
        <p>
          Instead, our broadband uses fibre optic cables that run directly into
          your home, allowing us to give you brilliantly fast speeds with
          amazing reliability.
        </p>
      </Subtitle>
      <SubmitButton>Find out more about full fibre</SubmitButton>
    </Container>
  );
};

export default InfoSection;
