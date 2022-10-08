import React from 'react';
import { WagmiConfig } from 'wagmi';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { wrapper, store, persistor } from '../src/lib/redux/store';
import ShoppingProvider from '../src/context/ShoppingProvider';
import { clientWagmi } from '../src/context/WagmiProvider';

import '../public/styles/globals.css';
import '../public/styles/base.scss';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ShoppingProvider>
          <WagmiConfig client={clientWagmi}>
            <Component {...pageProps} />
          </WagmiConfig>
        </ShoppingProvider>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
