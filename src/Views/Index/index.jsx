import React, {Component} from 'react';

import NavBar from '../../Components/NavBar';

class Index extends Component {
  render() {
    return (
      <div>

        <NavBar/>

        <div className="index-layout">
          Hello World
        </div>

      </div>
    );
  }
}

export default Index;