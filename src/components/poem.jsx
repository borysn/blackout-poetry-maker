import React, {Component} from 'react';
import Word from './word.jsx';

class Poem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      tokenizedText: props.tokenizedText
    };
  }

  render() {
    const words = this.state.tokenizedText.map((w, i) => {
      return (<Word key={i} value={w}/>);
    });

    return (
      <div>
        {words}
      </div>
    )
  }
}

export default Poem;
