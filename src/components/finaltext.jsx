import React, {Component} from 'react'

class FinalText extends Component {
  constructor(props) {
    super(props)
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
      </div>
    )
  }
}

export default FinalText
