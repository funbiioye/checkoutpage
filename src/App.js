import { Stack } from '@chakra-ui/layout'
import React from 'react'
import CheckoutPage from './components/CheckoutPage'

function App() {
  return (
    <Stack bg='#E5E5E5' h='100%' w='100vw' maxHeight='100%'>
      <CheckoutPage />
    </Stack>
  );
}

export default App
