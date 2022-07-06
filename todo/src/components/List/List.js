import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <ol className={this.props.className}>
        {this.props.children}
      </ol>
    )
  }
}
