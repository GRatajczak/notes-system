import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import { ErrorProvider } from 'hooks/useError';
import { store } from 'store';
import { Provider } from 'react-redux';
if (process.env.NODE_ENV === 'development') {
  worker
    .start()
    .then(() => {
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <ErrorProvider>
              <Root />
            </ErrorProvider>
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
    })
    .catch((err) => console.log(err));
}
