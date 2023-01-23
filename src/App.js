import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const alanBtnInst = useRef(alanBtn({
    key: '7b3d8453594be70256b1cbd1c96e3cc02e956eca572e1d8b807a3e2338fdd0dc/stage'
  })).current;

  useEffect(() => {
    alanBtnInst.activate().then(() => {
      alanBtnInst.playText('Hello, here is custom text');
    })
  }, [])


  return (
    <div className="App">

    </div>
  );
}

export default App;
