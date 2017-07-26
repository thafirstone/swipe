import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, PanResponder } from 'react-native';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    const panResponder = PanResponder.create({

    });
    this.state = { panResponder };
  }
  state = { }
  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }
  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

Component.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderCard: PropTypes.func,
};
