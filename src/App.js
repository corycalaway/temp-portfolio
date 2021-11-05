import './App.css';
import Header from "./components/Header";
import PageBody from "./components/PageBody";
import Footer from "./components/Footer";
import React, {useState} from 'react';

function App() {

  const [activePage, handleActivePage] = useState('About');


  return (
    <>
    <Header activePage={activePage} handleActivePage={handleActivePage}/>
    <PageBody activePage={activePage} />
    <Footer />

    </>
  );
}

export default App;
