import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        {this.props.children}
      </ul>
    )
  }
}
