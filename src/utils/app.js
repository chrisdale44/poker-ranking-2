newPokerHands() {
    const pokerHands = generateHand(NO_OF_PLAYERS);

    const pokerHands = [];

    // Loop over hands
    for (let i = 0; i < pokerHands.length; i++) {
      // Rank each hand
      const { rank, flush, straight, pairs, threes, fours } = rankHand(
        pokerHands[i].cards
      );

      // Create state object for each hand
      pokerHands.push({
        handId: i,
        cards: pokerHands[i].cards,
        name: pokerHands[i].name,
        rank,
        flush,
        straight,
        pairs,
        threes,
        fours
      });
    }

    // Get result of comparison
    const result = compareHands(pokerHands[0], pokerHands[1]);

    // return state object
    return {
      pokerHands,
      result
    };
  }

  updatePokerHandValue(handId, cardId, key, newValue) {
    let _state = this.state,
      _hand = _state.pokerHands[handId];
    _hand.cards[cardId][key] = newValue;

    const { rank, flush, straight, pairs, threes, fours } = rankHand(
      _hand.cards
    );

    _hand = Object.assign(_hand, {
      rank,
      flush,
      straight,
      pairs,
      threes,
      fours
    });

    _state.result = compareHands(_state.pokerHands[0], _state.pokerHands[1]);

    return _state;
  }

  handleCardChange = e => {
    this.setState(
      this.updatePokerHandValue(
        e.target.dataset.handid,
        e.target.id,
        e.target.name,
        e.target.value
      )
    );
  };

  handleRefresh = e => {
    this.setState(this.newPokerHands());
  };

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