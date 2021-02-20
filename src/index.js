import React, { useState } from "react";
import { render } from "react-dom";
import Main from './pages/main';
import './styles/style.scss'
import Auth from './components/utils/auth';

function App() {
  return <>
    <div className="main">
      <Auth>
        <Main/>
      </Auth>
    </div>
  </>;
}

render(<App />, document.getElementById("root"));