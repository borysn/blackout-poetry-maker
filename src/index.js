import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/inputtext.jsx';
import EditText from './components/edittext.jsx';
import FormatText from './components/formattext.jsx';
import Controls from './components/controls.jsx';
import './sass/style.scss';
import './assets/css/palanquin-font.css';

class MakeBlackoutPoetry extends Component {
  render() {
    return (
      <div id='content-container'>
       <div id='title-container' className='section-container'>
         <span id='title-text'>make blackout poetry</span>
       </div>
       <InputText/>
       <EditText/>
       <FormatText/>
       <Controls/>
      </div>
    );
  }
}

ReactDOM.render(
  <MakeBlackoutPoetry/>,
  document.getElementById('blackout-poetry-maker')
);
