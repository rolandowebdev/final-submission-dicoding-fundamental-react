import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme} resetCSS>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
