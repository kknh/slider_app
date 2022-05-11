import React, { createContext, useState, useEffect, useCallback } from 'react'
import data from './data'
const Context = createContext()

export default Context

export function ContextProvider({ children }) {
	const [reviews] = useState(data)
	const [slide, setSlide] = useState(0)

	const position = (index) => {
		if (slide === index) {
			return 'activeSlide'
		} else if (slide > index) {
			return 'prevSlide'
		} else if (slide < index) {
			return 'nextSlide'
		}
	}

	const increment = useCallback(() => {
		if (slide < reviews.length - 1) {
			setSlide((prev) => prev + 1)
		} else {
			setSlide(0)
		}
	}, [slide, reviews.length])

	const decrement = () => {
		if (slide > 0) {
			setSlide((prev) => prev - 1)
		} else {
			setSlide(reviews.length - 1)
		}
	}
	useEffect(() => {
		const slider = setInterval(() => increment(), 3000)

		return () => {
			clearInterval(slider)
		}
	}, [increment])
	return (
		<Context.Provider value={{ reviews, position, increment, decrement }}>
			{children}
		</Context.Provider>
	)
}
