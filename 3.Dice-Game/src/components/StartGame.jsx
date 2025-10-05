import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/home.png" alt="" width={"100%"} height={"100%"} />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button
          onClick={ toggle }
        >Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  /* justify-content: center; */
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

