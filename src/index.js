import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/inputtext.jsx';
import EditText from './components/edittext.jsx';
import FormatText from './components/formattext.jsx';
import Controls from './components/controls.jsx';
import Poem from './components/poem.jsx';
import Word from './components/word.jsx';

class MakeBlackoutPoetry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poem: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.getWords = this.getWords.bind(this);
  }

  getWords(text) {
    let words = [];
    const pattern = /[\w]+|[^\s\w]/g;
    const matches = text.match(pattern);

    for (let i = 0; i < matches.length; i++) {
      words.push(<Word key={i.toString()} value={matches[i]}/>)
    }

    console.log(words);

    return words;
  }

  handleTextChange(poemText) {
    this.setState({
      poem: {
        text: poemText,
        words: this.getWords(poemText)
      }
    });
  }

  render() {
    return (
      <div id='content-container'>
       <div id='title-container' className='section-container'>
         <span id='title-text'>make blackout poetry</span>
       </div>
       <InputText onTextChange={this.handleTextChange}/>
       <EditText poem={this.state.poem}/>
       <FormatText poem={this.state.peom}/>
       <Controls/>
      </div>
    );
  }
}

ReactDOM.render(
  <MakeBlackoutPoetry/>,
  document.getElementById('blackout-poetry-maker')
);
