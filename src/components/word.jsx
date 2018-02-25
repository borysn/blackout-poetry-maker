import React, {Component} from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({selected: (this.state.selected ? false : true)});
    this.props.onTextEdit(!this.state.selected, this.props.index);
  }

  render() {
    return (
      <div className='word-container'>
        <div className={this.state.selected ? 'word-selected' : 'word'} onClick={this.handleClick}>
          <span className='word-value'>{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export default Word;
