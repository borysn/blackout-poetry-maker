import React, {Component} from 'react'

class FinalText extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='finaltext-container' className='section-container'>
        <div className='section-title'>
          <span>4: final text</span>
        </div>
        <div id='finaltext'>
          <span id='finaltext-value'>{this.props.poem.finaltext}</span>
        </div>
      </div>
    )
  }
}

export default FinalText
