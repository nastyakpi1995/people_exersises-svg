/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FunctionComponent } from 'react';
import Layout from './components/ui/Layout/Layout';

interface OwnProps {}
type Props = OwnProps;

const App: FunctionComponent<Props> = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
