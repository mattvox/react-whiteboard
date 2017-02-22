/*eslint-disable*/

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

import List from '../js/components/list';

describe('List component', function() {
    it('Renders a list with multiple cards',  function() {
        var lists =
          {
            title: 'List #1',
            inputVal: '',
            cards: [
              'list 1, card 1',
              'list 1, card 2',
              'list 1, card 3',
              'list 1, card 4'
            ],
          }

        var renderer = TestUtils.createRenderer();
        renderer.render(
            <List
              title={lists.title}
              cards={lists.cards}
              inputVal={lists.inputVal}
            />
        )

        var result = renderer.getRenderOutput();

        result.type.should.equal('div');

        var title = result.props.children[0];
        title.type.should.equal('h3');
        title.props.children.should.equal('List #1');

        var list = result.props.children[1];
        list.type.should.equal('ul');
    });
});
