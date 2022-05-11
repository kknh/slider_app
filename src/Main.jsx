import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import './Main.css'
function Main() {
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
		<div className="mainContainer">
			<div className="reviewsContainer">
				<div className="buttonsContainer">
					<FiChevronLeft className="arrow-left" onClick={decrement} />
					<FiChevronRight className="arrow-right" onClick={increment} />
				</div>
				{reviews.map((review, index) => (
					<div className={`reviewContainer ${position(index)}`}>
						<img src={review.image} alt="reviewer" className="image" />
						<div className="name">{review.name}</div>
						<div className="title">{review.title}</div>
						<div className="quote">{review.quote}</div>
						<FaQuoteRight color={'var(--clr-primary-5)'} size={'3rem'} />
					</div>
				))}
			</div>
		</div>
	)
}
export default Main
