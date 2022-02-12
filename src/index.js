import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';
import { worker } from 'mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker
    .start()
    .then(() => {
      ReactDOM.render(
        <React.StrictMode>
          <Root />
        </React.StrictMode>,
        document.getElementById('root')
      );
    })
    .catch((err) => console.log(err));
}
