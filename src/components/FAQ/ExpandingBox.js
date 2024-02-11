import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GrBottomCorner } from "react-icons/gr";
import styled from "styled-components";

const SubmitButton = styled.div`
  margin-bottom: 10px;
  background: white;
  border-radius: ${(props) => (props.isExpanded ? "14px" : "14px 14px 0 0")};
  outline: none;
  border: #ccc 1px solid;
  padding: 25px;
  padding-top: 20px;
  padding-bottom: ${(props) =>
    props.showLearnMore && props.isExpanded ? "100px" : "10px"};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 14px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px;
  margin-bottom: ${(props) => (props.hasButton ? "40px" : "0")};
`;

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ccc;
  height: 40px;
  width: 40px;
  &:hover {
    border-color: #777;
  }
`;

const ButtonInfo = styled.p`
  font-weight: 400;
  font-size: 26px;
  color: black;
  margin-top: 20px; /* ボタンタイトルとの間隔を調整 */
  margin-bottom: 0px; /* 下部の余分なスペースを調整 */
  padding-bottom: 20px; /* 下部の余分なスペースを調整 */
`;

const LearnMoreButton = styled.button`
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  user-select: none;
  background: transparent;
  border: 2px #ddd solid;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 75px;
  &:hover {
    width: 380px;
    height: 85px;
    border-radius: 35px;
  }
  transition: all 0.3s;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const ButtonText = styled.p`
  user-select: none;
  font-weight: 700;
  font-size: 23px;
`;

const ButtonTitle = styled.p`
  font-weight: 700;
  font-size: 24px;

  color: black;
  margin-top: 10px;
`;
const InfoWrapper = styled.div`
  margin-bottom: ${(props) =>
    props.hasButton ? "20px" : "0"}; /* 下部の余分なスペースを調整 */

  padding-bottom: ${(props) =>
    props.hasButton ? "20px" : "0"}; /* 下部の余分なスペースを調整 */
`;

const ExpandingBox = ({
  hasButton = false,
  title,
  primaryInfo,
  secondaryInfo,
  showLearnMore,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <SubmitButton
      onClick={handleButtonClick}
      isExpanded={isExpanded}
      showLearnMore={showLearnMore}
    >
      <ButtonBox>
        <ButtonTitle>{title}</ButtonTitle>

        {isExpanded ? (
          <IconCircle>
            <AiOutlineUp
              size={15}
              style={{
                transform: "scaleX(1.35)",
                position: "relative",
                top: 2,
              }}
            />
          </IconCircle>
        ) : (
          <IconCircle>
            <AiOutlineDown
              size={15}
              style={{
                transform: "scaleX(1.35)",
                position: "relative",
                top: 2,
              }}
            />
          </IconCircle>
        )}
      </ButtonBox>

      {isExpanded && (
        <Content hasButton={hasButton}>
          <InfoWrapper hasButton={hasButton}>
            <ButtonInfo>{primaryInfo}</ButtonInfo>

            {secondaryInfo && <ButtonInfo>{secondaryInfo}</ButtonInfo>}
          </InfoWrapper>
          {showLearnMore && (
            <LearnMoreButton hasButton={hasButton}>
              <ButtonText>{showLearnMore}</ButtonText>
            </LearnMoreButton>
          )}
        </Content>
      )}
    </SubmitButton>
  );
};

export default ExpandingBox;
