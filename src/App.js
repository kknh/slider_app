import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import { ContextProvider } from './Context'

function App() {
	return (
		<ContextProvider>
			<Router>
				<section className="container">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Header />
									<Main />
								</>
							}
						/>
					</Routes>
				</section>
			</Router>
		</ContextProvider>
	)
}

export default App
