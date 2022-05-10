import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<HeaderStyle>
			<span>/</span>Reviews
		</HeaderStyle>
	)
}

const HeaderStyle = styled.header`
	text-align: center;
	font-size: 2.5rem;
	font-weight: 500;
	color: var(--clr-grey-3);
	margin-bottom: 2rem;
	span {
		color: var(--clr-primary-5);
		margin-right: 13px;
		font-size: 0.9em;
		font-weight: 700;
	}
`

export default Header
