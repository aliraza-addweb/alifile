import React from 'react';
import './App.css';

import * as styled from './Components/Styled';
import * as emotion from './Components/Emotion';

function App() {
  const [framework, setFramework] = React.useState<'none' | 'styled' | 'emotion'>('none');
  const thousand = Array(1000).fill(0);
  return (
    <div className="App">
      <button id="none" onClick={() => setFramework('none')}>none</button>
      <button id="none" onClick={() => setFramework('styled')}>styled</button>
      <button id="none" onClick={() => setFramework('emotion')}>emotion</button>

      {
        framework ==='styled' ? <styled.Column id="root" gap={10}>
          {thousand.map((_, i) => (<styled.Button key={i}>{i}</styled.Button>))}
        </styled.Column>
        :
        framework ==='emotion' ? <emotion.Column id="root" gap={10}>
          {thousand.map((_, i) => (<emotion.Button key={i}>{i}</emotion.Button>))}
        </emotion.Column>
        :<div>Select a framework</div>
      }
    </div>
  );
}

export default App;
