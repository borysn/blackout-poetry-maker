import React, {Component} from 'react';
import Word from './word.jsx';

class Poem extends Component {
  constructor(props) {
    super(props);
    this.props = {
      text: "",
      words: {}
    }
  }
}

export default Poem;
