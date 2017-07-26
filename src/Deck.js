import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, PanResponder } from 'react-native';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    });
    this.state = { panResponder, position };
  }
  state = { }
  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }
  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

Component.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderCard: PropTypes.func,
};
