import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import './Main.css'
function Main() {
	const [reviews, setReviews] = useState(data)

	return (
		<div className="mainContainer">
			<div className="reviewsContainer">
				<div className="buttonsContainer">
					<FiChevronLeft className="arrow-left" />
					<FiChevronRight className="arrow-right" />
				</div>
				{reviews.map((review) => (
					<div className="reviewContainer">
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
