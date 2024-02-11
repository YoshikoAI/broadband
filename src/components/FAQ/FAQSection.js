import styled from "styled-components";
import React from "react";
import ExpandingBox from "./ExpandingBox";

const Container = styled.div`
  background-color: rgb(260, 188, 236);
  padding-bottom: 120px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
`;

const PageTitle = styled.p`
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 40px;
`;

const SubmitButton = styled.div`
  margin-bottom: 10px;
  background: white;
  border-radius: 14px;
  outline: none;
  border: #ccc 1px solid;
  padding: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  &:active {
    opacity: 0.65;
  }
  cursor: pointer;
  display: flex;s
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  height: 400px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const FAQSection = () => {
  return (
    <Container>
      <PageTitle>Still not sure? Tell us what’s bothering you.</PageTitle>
      <Subtitle>
        We’ve seen and heard it all, so we’re pretty confident we can help you
        too.
      </Subtitle>

      <ExpandingBox
        title="I'm moving home soon..."
        primaryInfo="Oh this is an easy one! If you’re already a member of the flock, simply log in to your account and click on ‘I’m moving home’.
            If you’re not yet a member, but want to join RocketBand
            when you move, we’d be chuffed to have you - when you sign up, just
            make sure your go-live date lines up with your moving day."
        showLearnMore="Learn more about switching"
      />
      <ExpandingBox
        title="Isn't switching a hassle?"
        primaryInfo="
        It might be for other broadband providers, but not us. We’ve made it easy, simple and as seamless as possible. To get started, pop in your postcode at the top of the page.
        "
        secondaryInfo={"Want to know more? Head to our Switch page."}
      />
      <ExpandingBox
        title="What speed do I need?"
        primaryInfo="All our speeds are built for the latest streaming, gaming and WFH needs. But what you need for your home will depend on how many people you live with and how you all like to use the internet. Also, your address (and what type of fibre connection it has) will play a part in what speed you can get too. Find out more by reading our quick Speed Guide."
      />
      <ExpandingBox
        title="I'm stuck in a contract"
        primaryInfo="Drat! It can be worth double checking with your current provider to see how much it would cost to end your contract. But whether you join our flock next week or next year, rest easy knowing we’ll be the last switch you’ll ever need."
      />
    </Container>
  );
};

export default FAQSection;
