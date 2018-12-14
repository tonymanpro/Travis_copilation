import React, { Component } from 'react';

import FormCard from './Components/FormCard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormCard viewName={this.props.viewName} url={this.props.url} data={this.props.data} authorization={this.props.authorization} />
      </div>
    );
  }
}

export default App;
