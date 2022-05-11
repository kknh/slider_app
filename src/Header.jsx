import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<HeaderStyle>
			<span>/</span>Reviews
		</HeaderStyle>
	)
}

const HeaderStyle = styled.h2`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 2.5rem;
	line-height: 1;
	font-weight: 500;
	color: var(--clr-grey-3);
	letter-spacing: 0.1rem;
	span {
		color: var(--clr-primary-5);
		margin-right: 13px;
		font-size: 0.9em;
		font-weight: 700;
	}
`

export default Header
