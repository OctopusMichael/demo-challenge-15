import React, { useState } from 'react';
import Footer from './components/Footer';

import Page from "./components/Page";
import "./style/App.css";

function App() {
  const [email, setEmail] = useState("");

  console.log(email)

  return (
    <>
      <Page setEmail={setEmail}/>
      <Footer/>
    </>
  );
}

export default App;
