import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <App />
    <ToastContainer />
  </ChakraProvider>,
)
