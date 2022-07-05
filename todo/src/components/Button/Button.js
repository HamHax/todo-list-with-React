import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.className} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
}
