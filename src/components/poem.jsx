import React, {Component} from 'react'
import Word from './word.jsx'

class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selections: []
    }
    this.handleTextEdit = this.handleTextEdit.bind(this)
  }

  handleTextEdit(didSelect, index) {
    let indices = this.state.selections
    if (didSelect) {
      indices.push(index)
    } else {
      indices.splice(indices.indexOf(index), 1)
    }
    this.setState({selections: indices})
    this.props.onTextEdit(indices)
  }

  render() {
    const words = this.props.tokenizedText.map((w, i) => {
      return (<Word key={i} value={w} index={i} onTextEdit={this.handleTextEdit} />)
    })

    return (
      <div id='words'>
        {words}
      </div>
    )
  }
}

export default Poem
