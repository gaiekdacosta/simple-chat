import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../public/index.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#212121', // Cor de fundo escura
        color: 'white', // Cor do texto branca
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
