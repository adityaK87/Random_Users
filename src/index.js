import React from 'react';
import ReactDOM from 'react-dom/client';
// import ClassBasedApp from './components/ClassBasedApp';
import FunctionalBasedApp from './components/FunctionalBasedApp';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <FunctionalBasedApp />
)
// root.render(<ClassBasedApp />)