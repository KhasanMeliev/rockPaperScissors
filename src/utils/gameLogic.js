export const getComputerChoice = () => {
  const values = ["rock", "paper", "scissors"];
  const computerChoiceIndex = Math.floor(Math.random() * values.length);
  return values[computerChoiceIndex];
};

export const getWinner = (user, computer) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  if (user === computer) return "draw";
  if (rules[user] === computer) return "user";
  return "computer";
};
