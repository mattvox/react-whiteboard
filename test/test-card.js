/*eslint-disable*/

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders a card with text',  function() {
        var text = 'example text';

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        var result = renderer.getRenderOutput();
        result.props.children.should.equal(text);
    });
});
