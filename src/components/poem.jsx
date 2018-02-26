import React, {Component} from 'react'
import Word from './word.jsx'

class Poem extends Component {
  constructor(props) {
    super(props)
    this.handleTextEdit = this.handleTextEdit.bind(this)
  }

  handleTextEdit(didSelect, index) {
    let indices = this.props.indices
    if (didSelect) {
      indices.push(index)
    } else {
      indices.splice(indices.indexOf(index), 1)
    }
    this.props.onTextEdit(indices)
  }

  render() {
    const words = this.props.tokenizedText.map((w, i) => {
      let selected = this.props.indices.indexOf(i) != -1 ? true : false
      return (
        <Word key={i} value={w} index={i} selected={selected}
          onTextEdit={this.handleTextEdit}/>
      )
    })

    return (
      <div id='words'>
        {words}
      </div>
    )
  }
}

export default Poem
