import React, { Component } from 'react';

import List from './list';

const Board = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          {props.lists.map((list, index) =>
            <List
              title={list.title}
              cards={list.cards}
              id={index}
              key={index}
              inputVal={list.inputVal}
              onAddInputChanged={props.onAddInputChanged} onAddSubmit={props.onAddSubmit}
            />
          )}
        </div>
    );
  }

  export default Board;
