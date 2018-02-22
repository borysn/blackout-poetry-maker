import React from 'react';
import ReactDOM from 'react-dom';

const titleText = 'make blackout poetry';

ReactDOM.render(
  <div id='title-container'>
    <span id='title-text'>{titleText}</span>
  </div>,
  document.getElementById('blackoutpoetry-maker')
);
