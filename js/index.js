import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const boardData = {
  inputValue: 'input value',
  boardTitle: 'My New Board',
  lists: [
    {
      title: 'List #1',
      inputVal: '',
      cards: [
        'list 1, card 1',
        'list 1, card 2',
        'list 1, card 3',
        'list 1, card 4'
      ],
    },
    {
      title: 'List #1',
      inputVal: '',
      cards: [
        'list 2, card 1',
        'list 2, card 2',
        'list 2, card 3'
      ]
    },
    {
      title: 'List #1',
      inputVal: '',
      cards: [
        'list 3, card 1',
        'list 3, card 2',
        'list 3, card 3'
      ]
    }
  ]
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = boardData;

    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  onAddInputChanged (event, id) {
    event.preventDefault();

    const newList = this.state.lists.slice();

    newList[id].inputVal = event.target.value;

    this.setState({
        lists: newList
    })
  }

  onAddSubmit (event, id) {
    event.preventDefault();

    const newList = this.state.lists.slice();
    const { inputVal } = this.state.lists[id];

    newList[id].cards.push(inputVal);
    newList[id].inputVal = '';

    this.setState({
      lists: newList,
    })
  }


  render () {
    return (
      <Board
        title={this.state.boardTitle}
        lists={this.state.lists}
        onAddInputChanged={this.onAddInputChanged}
        onAddSubmit={this.onAddSubmit}
      />
    );
  }
}

ReactDOM.render(
    <div><App/></div>, document.getElementById('app-container'));
