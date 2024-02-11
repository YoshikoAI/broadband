import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const Container = styled.div`
  background: hsla(40, 94%, 74%, 1);

  background: linear-gradient(
    90deg,
    hsla(40, 94%, 74%, 1) 0%,
    hsla(60, 89%, 72%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(40, 94%, 74%, 1) 0%,
    hsla(60, 89%, 72%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(40, 94%, 74%, 1) 0%,
    hsla(60, 89%, 72%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FBD07C", endColorstr="#F7F779", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF930F", endColorstr="#FFF95B", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF0F7B", endColorstr="#F89B29", GradientType=1 );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F9CDC3", endColorstr="#FACEFB", GradientType=1 );
  padding-bottom: 120px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
`;

const PageTitle = styled.p`
  font-size: 42px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 300;
  padding-bottom: 30px;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SlideSection = () => {
  return (
    <Container>
      <PageTitle>Guiding you every step of the way</PageTitle>
      <Subtitle>
        We get it, the internet can be a confusing place. So we’ve put together
        a bunch of simple guides to help explain its more fiddly bits. You don’t
        even have to be in our flock to read them (we’re generous like that).
      </Subtitle>
      <ArticleContainer>
        <ArticleCard
          type="Guide"
          title="Upgrading to full fibre: all you need to know"
          image="https://images.prismic.io/cuckoo-egg/353122c1-ecf2-4be9-bc9e-61ad08978207_Upgrading+to+full+fibre.png?auto=compress,format&rect=0,33,2144,1206&w=1100&h=619"
        />
        <ArticleCard
          type="Guide"
          title="Full Fibre (FTTP): Top 10 benefits"
          image="https://images.prismic.io/cuckoo-egg/42911f93-e664-43b9-ace9-e38ba97267f3_Full+Fibre+%28FTTP%29_+Top+10+benefits.png?auto=compress,format&rect=0,33,2144,1206&w=1100&h=619"
        />
        <ArticleCard
          type="Guide"
          title="How to boost your Wi-Fi signal in your home"
          image="https://images.prismic.io/cuckoo-egg/9f645765-23d7-4d4b-ac8d-eacacd3a0826_How+to+boost+your+Wi-Fi+signal+in+the+home+V02.png?auto=compress,format&rect=0,33,2144,1206&w=1100&h=619"
        />
        <ArticleCard
          type="Guide"
          title="Staying safe online: Top 8 tips"
          image="https://images.prismic.io/cuckoo-egg/f5c27f83-d991-4533-84c6-6d7416635a6a_Staying+safe+online_+top+8+tips.png?auto=compress,format&rect=0,33,2144,1206&w=1100&h=619"
        />
      </ArticleContainer>
    </Container>
  );
};

export default SlideSection;
