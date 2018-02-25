import React, {Component} from 'react'

class FormatItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.toggle(e, this.props.value, this.props.index)
  }

  render() {
    return (
      <div className={(this.props.selected ? 'format-item-selected' : 'format-item')}
        onClick={this.handleClick}>
        <span className='format-item-value'>{this.props.value}</span>
      </div>
    )
  }
}

export default FormatItem
