import React from 'react';
import Header from './components/header/header.js';
import ContentDisplay from './components/content/contentDisplay.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <Header className='h-20' />
      <ContentDisplay className='flex-grow' />
      <Footer className='h-20' />
    </div>
  )
}

export default App;