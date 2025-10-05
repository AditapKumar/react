import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2> How to play dice game? </h2>
      <div className="text">
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After click on dice, if <b>selected number = dice number</b>, you
          will get <b>same point as the dice</b>{" "}
        </p>
        <p>
          4. If your guess get wrong, then <b> 1 point will be deducted. </b>
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #e3e3e3;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 20px;
  }
`;
