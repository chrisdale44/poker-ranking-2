getResultText = result => {
  switch (result) {
    case 1:
      return `${this.state.pokerHands[0].name} wins`;
    case 2:
      return `${this.state.pokerHands[1].name} wins`;
    case 3:
      return `Tie`;
    default:
      throw new Error("Unknown result: " + result);
  }
};
