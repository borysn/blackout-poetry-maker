import React, {Component} from 'react';
import FormatItem from './formatitem.jsx';

class FormatText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formats: ['░', '▒', '▓', '█'],
      selected: 3
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(e, index) {
    this.setState({selected: index});
  }

  render() {
    const items = this.state.formats.map((v, i) => {
      return (
        <FormatItem
          selected={(this.state.selected === i ? true : false)}
          key={i}
          index={i}
          value={v}
          toggle={this.toggle}
        />
      );
    });

    return (
      <div id='formattext-container' className='section-container'>
        <div className='section-title'>
          <span>3: format text</span>
        </div>
        <div id='formattext'>
          <div id='format-item-container'>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default FormatText;
