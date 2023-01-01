import styled from "styled-components";

export const CircleWrapper = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin: 10px;
  svg {
    color: white;
    font-size: 30px;
  }
`;

export const ScoresWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 25px;
  gap: 10px;
`;

export const ScoreCounter = styled.div`
  display: flex;
  gap: 20px;
  button {
    width: 60px;
    height: 60px;
    background-color: inherit;
    color: white;
    font-size: 25px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

export const CirclesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBlock = styled.div`
  margin: 40px 0;
  height: 70px;
`;

