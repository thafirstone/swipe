import React, { Component } from 'react';
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
