import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/inputtext.jsx';
import EditText from './components/edittext.jsx';
import FormatText from './components/formattext.jsx';
import Controls from './components/controls.jsx';
import Poem from './components/poem.jsx';

class MakeBlackoutPoetry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poem: new Poem()
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(poemText) {
    this.setState({poem: {text:poemText}});
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
