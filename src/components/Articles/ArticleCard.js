import React from "react";
import styled from "styled-components";

// const Box = styled.div`
//   border-radius: 18px;
//   width: 320px;
//   height: 180px;
//   display: flex;
//   flex-direction: row;
//   margin-top: 40px;
//   margin-left: 10px;
//   margin-bottom: 20px;
//   background-size: cover;　//イメージのサイズが合わない時は特に、これで余白をイメージでカバーできる。
//   background-position: center;　//真ん中からイメージが湧き出る感覚。センターに合わせてイメージを出現させれる
//   background-repeat: no-repeat;　//時々、イメージが余白があるとリピートするから、これで防ぐ
//   background-image: ${(props) => `url(${props.imageSource})`}; //これでいろんなイメージをパストオンする
// `;

const Box = styled.div`
  border-radius: 18px;
  width: 320px;
  height: 180px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 10px;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imageSource})`};
`;

const InfoText = styled.p`
  margin-top: 12px;
  margin-left: 10px;
  height: 80px;
  font-size: 20px;
  font-weight: 750;
  width: 240px;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
`;
const GuideButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  background: Magenta;
  color: white;
  border-radius: 14px;
  outline: none;
  border: transparent;
  padding: 14px;
  height: 5px;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.4;
    transform: scale(1.02);
  }
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const ArticleImage = styled.img`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  &:hover {
    opacity: 0.65;
  }
  cursor: pointer;
`;

const ArticleCard = ({ title = "Title", type = "Guide", image }) => {
  //ここでプロップスとして名前つけて、渡すことによってよってよってリユーザブルになって
  //何度も使えて、しかも、スタイリングしやすくなる。イメージや、幅、間隔、そして、セクション全体ではなく、一つづつのボックスの中で操作できるのでもっと簡単に他とバランスの取れたスタイリングできる。
  return (
    <Container>
      <Box imageSource={image} />
      <GuideButton>{type}</GuideButton>
      <InfoText>{title}</InfoText>
    </Container>
  );
};

export default ArticleCard;
