import React, {Component} from 'react';
import Word from './word.jsx';

class Poem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const words = this.props.tokenizedText.map((w, i) => {
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
