import React from 'react'

import Code from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/styles/hljs'

import snippets from '../snippets'

const Modelagem = () => (
  <section>
    <h2>2 Modelagem</h2>
    <p>
			O problema foi modelado como uma busca em um grafo, onde as pessoas são representadas por nós
			e suas relações por arestas. Além das relações familiares foram introduzidas duas propriedades:
			<code> promoter</code> que indica se a pessoa recomenda a música (<code>idade {"<"} 35</code>)
			e <code>visited</code> que indica se o nó já foi visitado na busca.
		</p>
		<Code language="c" style={githubGist}>
			{snippets.node}
		</Code>
		<p>
			Após a leitura dos dados então foi feita uma DFS, onde um contador é incrementado toda vez que
			um nó é visitado, e os nós com <code>promoter == false</code> são ignorados.
		</p>
  </section>
)

export default Modelagem
