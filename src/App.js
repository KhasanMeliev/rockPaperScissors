import "./App.css";
import CircleIcon from "./components/CircleIcon";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import { useState } from "react";
import { getComputerChoice, getWinner } from "./utils/gameLogic";
import Score from "./components/Score";
import { CirclesBlock, TextBlock } from "./components/styles";

const messages = {
  user: "You won!",
  computer: "You lost!",
  draw: "Draw!",
};

function App() {
  const [user, setUser] = useState();
  const [computer, setComputer] = useState();
  const [message, setMessage] = useState();
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  const handleGame = (userChoice) => {
    if (!userChoice) return;
    const computerChoice = getComputerChoice();
    const result = getWinner(userChoice, computerChoice);
    setMessage(messages[result]);
    setUser(userChoice);
    setComputer(computerChoice);

    if (result === "user") {
      setUserPoints((prev) => prev + 1);
      return;
    }
    if (result === "computer") {
      setComputerPoints((prev) => prev + 1);
      return;
    }
  };

  return (
    <div className="App">
      <Score userPoints={userPoints} computerPoints={computerPoints} />
      <TextBlock>
        <h1>Your choice is: {user}</h1>
        <h1>Computer choice is: {computer}</h1>

        <h1>{message}</h1>
      </TextBlock>
      <CirclesBlock>
        <CircleIcon Icon={FaRegHandRock} value="rock" handleGame={handleGame} />
        <CircleIcon
          Icon={FaRegHandPaper}
          value="paper"
          handleGame={handleGame}
        />
        <CircleIcon
          Icon={FaRegHandScissors}
          value="scissors"
          handleGame={handleGame}
        />
      </CirclesBlock>
    </div>
  );
}

export default App;
