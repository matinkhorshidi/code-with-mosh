import React, { Component } from 'react';

class Like extends Component {
  state = {};

  render() {
    let iconClass = 'far fa-heart fa-1';
    if (this.props.liked) {
      iconClass = 'fas fa-heart fa-1x';
    }
    return <i className={iconClass}></i>;
  }
}

export default Like;
