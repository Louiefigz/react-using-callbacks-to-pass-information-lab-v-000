import React, { Component } from 'react';
import getSelectedColor from 'Matrix.js'
export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleClick = () => {
    let newColor = this.props.getSelectedColor()
    this.setState = ({
      color : newColor
    })
  }

  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
