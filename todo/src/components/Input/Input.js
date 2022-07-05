import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input onChange={this.props.onChange} className={this.props.className} ref={this.props.propsRef} type={this.props.type}/>
    )
  }
}
