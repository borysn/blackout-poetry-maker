import React, {Component} from 'react'

class Word extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onTextEdit(!this.props.selected, this.props.index)
  }

  render() {
    return (
      <div className='word-container'>
        <div className={this.props.selected ? 'word-selected' : 'word'} onClick={this.handleClick}>
          <span className='word-value'>{this.props.value}</span>
        </div>
      </div>
    )
  }
}

export default Word
