import React from 'react';

import Card from './card'

const List = (props) => {
    return (
        <div>
          <h3>{props.title}</h3>
          <ul>
            {props.cards.map((card, index) => <Card text={card} id={index} key={index} />)}
            <form>
              <input
                onChange={(event) => props.onAddInputChanged(event, props.id)}
                value={props.inputVal}
              />
              <button onClick=
                {(event) => props.onAddSubmit(event, props.id)}>Submit
              </button>
            </form>
          </ul>
        </div>
    )
}

export default List;
