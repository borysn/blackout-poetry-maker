import React, {Component} from 'react'
import Clipboard from 'clipboard'

class FinalText extends Component {
  constructor(props) {
    super(props)
    new Clipboard('#copy-button')
  }

  render() {
    return (
      <div id='finaltext-container' className='section-container'>
        <div className='section-title'>
          <span className='section-title-num'>4</span>
          <span className='section-title-text'>final text</span>
        </div>
        <div id='finaltext'>
          <span id='finaltext-value'>{this.props.poem.finaltext}</span>
        </div>
        <div className='controls'>
          <div id='copy-button' className='control'
            data-clipboard-text={this.props.poem.finaltext}>
            <span className='control-text'>copy</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FinalText
