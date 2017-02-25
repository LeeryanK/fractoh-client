const MenuFlowTree = {
  'new-game': {
    'cancel': '..',
    'add-player': {
      'ok': addPlayer,
      'cancel': '..'
    },
    'select-player': {
      'done': '..',
      'delete': {
        'ok': deletePlayer,
        'cancel': '..'
      },
      'edit-deck': {
        'done': '..',
        'delete-card': deleteCard,
        'add-card': addCard,
        'load-premade': {
          'ok': loadPremade,
          'cancel': '..'
        }
      }
    },
    'begin-game': {
      'ok': beginGame,
      'cancel': '..'
    }
  }
};

function addPlayer(router) {
  if (!router.state.players) {
    router.state.players = [];
  }
  
  router.state.players.push({
    name: router.state.playerName,
    deck: []
  });
}

function deletePlayer(router) {
  const indexOfPlayerToBeDeleted = router.state.players.indexOf(router.state.selectedPlayer);
  router.state.players.splice(indexOfPlayerToBeDeleted, 1);
}

function addCard(router) {
  router.state.acceptedSelection = 'card';
  router.state.callback = function(card) {
    router.state.selectedPlayer.deck.push(card);
  };
}

function deleteCard(router) {
  router.state.acceptedSelection = 'card';
  router.state.callback = function(card) {
    const indexOfCardToBeDeleted = router.state.selectedPlayer.deck.indexOf(card);
    if (indexOfCardToBeDeleted > -1) {
      router.state.selectedPlayer.deck.splice(indexOfCardToBeDeleted, 1);
    }
  };
}

function loadPremade(router) {
  if (router.state.selectedPremadeDeck) {
    for (let card of router.state.selectedPremadeDeck) {
      router.state.selectedPlayer.deck.push(card);
    }
  }
  
  router.state.selectedPremadeDeck = null;
}

function beginGame(router) {
  // TODO
}

export default MenuFlowTree;
