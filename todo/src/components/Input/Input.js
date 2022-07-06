import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input onChange={this.props.onChange} className={this.props.className} ref={this.props.propsRef} placeholder={this.props.placeholder} type={this.props.type}/>
    )
  }
}


