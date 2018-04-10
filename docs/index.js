import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'emotion'

import 'katex/dist/katex.min.css'

import Header from './section/header'
import Intro from './section/intro'
import Modelagem from './section/modelagem'
import Analise from './section/analise'
import Experimentos from './section/experimentos'

injectGlobal`
	body {
		color: #333;
		font-family: 'Source Serif Pro';
		line-height: 1.5em;
		margin: 64px auto;
		max-width: 48em;
	}
	p {
		text-indent: 24px;
		margin: 0;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 16px;
	}
	section {
		margin-bottom: 32px;
	}
`

const Article = () => (
  <Fragment>
		<Header />
    <Intro />
    <Modelagem />
    <Analise />
    <Experimentos />
  </Fragment>
)

render(<Article />, document.querySelector('article'))
