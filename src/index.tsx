import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const roots = document.querySelectorAll<HTMLElement>('.currency-react__widget');

roots.forEach(div => {
    return ReactDOM.createRoot(div).render(<App symbol={div.dataset.symbol ? div.dataset.symbol : ''}/>);
})


