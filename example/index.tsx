import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FabricThing } from '../.';

const App = () => {
  return (
    <div>
      <FabricThing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
