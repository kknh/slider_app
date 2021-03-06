import React, { useContext } from 'react'
import styled from 'styled-components'
import Context from './Context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
function Main() {
	const { reviews, position, increment, decrement } = useContext(Context)

	return (
		<ReviewsContainer>
			{reviews.map((review, index) => (
				<article className={`reviewContainer ${position(index)}`}>
					<img src={review.image} alt="reviewer" className="image" />
					<h4 className="name">{review.name}</h4>
					<p className="title">{review.title}</p>
					<p className="quote">{review.quote}</p>
					<FaQuoteRight color={'var(--clr-primary-5)'} size={'3rem'} />
				</article>
			))}
			<button className="arrow-left btn" onClick={decrement}>
				<FiChevronLeft />
			</button>
			<button className="arrow-right btn" onClick={increment}>
				<FiChevronRight />
			</button>
		</ReviewsContainer>
	)
}
const ReviewsContainer = styled.div`
	position: relative;
	width: 80vw;
	height: 400px;
	margin: 5rem auto;
	max-width: 800px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	.reviewContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		transition: all ease-in-out 300ms;
	}

	.activeSlide {
		opacity: 1;
		transform: translateX(0%);
	}

	.prevSlide {
		transform: translateX(-100%);
	}

	.nextSlide {
		transform: translateX(100%);
	}

	.image {
		border-radius: 50%;
		height: 150px;
		width: 150px;
		object-fit: cover;
		border: 4px solid var(--clr-grey-8);
		box-shadow: var(--dark-shadow);
		margin-bottom: 1rem;
	}

	.name {
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--clr-primary-5);
	}

	.title {
		font-size: 1rem;
		text-transform: capitalize;
		margin-bottom: 2rem;
	}

	.quote {
		font-size: 1rem;
		color: var(--clr-grey-5);
		margin-bottom: 1rem;
		line-height: 2;
		width: 700px;
		text-align: center;
		letter-spacing: 0.5px;
	}

	.btn {
		border: none;
		outline: none;
		height: 30px;
		width: 30px;
		border-radius: 5px;
		cursor: pointer;
	}

	.arrow-left,
	.arrow-right {
		font-size: 25px;
		background-color: var(--clr-grey-5);
		color: #fff;
		position: absolute;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.arrow-left {
		top: 50%;
		transform: translateY(-50%);
		left: 0;
	}

	.arrow-right {
		top: 50%;
		transform: translateY(-50%);
		right: 0;
	}

	.arrow-left:hover,
	.arrow-right:hover {
		background-color: var(--clr-primary-5);
	}
`
export default Main
