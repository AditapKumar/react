import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
    
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;

    img {
      width: 200px;
      height: 200px;
    }
  }

  p {
    font-size: 24px;
    margin: 10px;
    font-weight: 500;
  }
`;
