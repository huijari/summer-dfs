import React from 'react'
import styled from 'react-emotion'

const Layout = styled('header')`
	margin-bottom: 64px;

	h1, h2, h3 {
		font-weight: 500;
		margin-top: 0;
		margin-bottom: 8px;
		text-align: center;
	}
`

const Header = () => (
	<Layout>
		<h1>AEDS III - TP0 - O Hit do Verão</h1>
		<h3>Alexandre Cesar da Silva</h3>
		<h3>Abril de 2018</h3>
	</Layout>
)

export default Header
