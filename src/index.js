import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import InputText from './components/inputtext.jsx'
import EditText from './components/edittext.jsx'
import FormatText from './components/formattext.jsx'
import FinalText from './components/finaltext.jsx'
import Controls from './components/controls.jsx'

class MakeBlackoutPoetry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poem: {text: '', tokenizedText: [], selections: [], format: '█', finaltext: ''}
    }
    this.changeState = this.changeState.bind(this)
    this.getTokenizedText = this.getTokenizedText.bind(this)
    this.formatFinalText = this.formatFinalText.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTextEdit = this.handleTextEdit.bind(this)
    this.handleFormatChange = this.handleFormatChange.bind(this)
  }

  changeState(poemText, words, indices, char, final) {
    this.setState({
      poem: {
        text: poemText,
        tokenizedText: words,
        selections: indices,
        format: char,
        finaltext: final
      }
    })
  }

  getTokenizedText(text) {
    const matches = text.match(/[\w]+|[^\s\w]/g)
    return matches != null ? matches : []
  }

  formatFinalText(words, indices, format) {
    let text = ''
    words.map((v, i) => {
      if (indices.indexOf(i) != -1) {
        text += v
      } else {
        text += v.replace(/./g, format)
      }
      text += ' '
    })
    return text
  }

  handleTextChange(poemText) {
    let tokenizedText = this.getTokenizedText(poemText)
    this.changeState(
      poemText,
      tokenizedText,
      this.state.poem.selections,
      this.state.poem.format,
      this.formatFinalText(tokenizedText, this.state.poem.selections, this.state.poem.format)
    )
  }

  handleTextEdit(indices) {
    this.changeState(
      this.state.poem.text,
      this.state.poem.tokenizedText,
      indices,
      this.state.poem.format,
      this.formatFinalText(this.state.poem.tokenizedText, indices, this.state.poem.format)
    )
  }

  handleFormatChange(format) {
    this.changeState(
      this.state.poem.text,
      this.state.poem.tokenizedText,
      this.state.poem.selections,
      format,
      this.formatFinalText(this.state.poem.tokenizedText, this.state.poem.selections, format)
    )
  }

  render() {
    return (
      <div id='content-container'>
        <div id='title-container' className='section-container'>
          <span id='title-text'>make blackout poetry</span>
        </div>
        <InputText onTextChange={this.handleTextChange}/>
        <EditText poem={this.state.poem} onTextEdit={this.handleTextEdit}/>
        <FormatText onChangeFormat={this.handleFormatChange}/>
        <FinalText poem={this.state.poem}/>
        <Controls/>
      </div>
    )
  }
}

ReactDOM.render(
  <MakeBlackoutPoetry/>,
  document.getElementById('blackout-poetry-maker')
)
