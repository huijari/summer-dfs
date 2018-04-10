import React from 'react'

import Code from 'react-syntax-highlighter'
import { GithubGist } from 'react-syntax-highlighter/styles/hljs'
import { InlineMath } from 'react-katex';

import snippets from '../snippets'
import benchGraph from '../bench.jpg'

const Experimentos = () => (
  <section>
    <h2>4 Análise Experimental</h2>
    <p>
      Para a análise experimental foram utilizados os casos de testes providos. Para cada caso
      o programa foi executado 10 vezes e posteriormente foi extraída a média do tempo gasto.
      No gráfico abaixo podemos ver que o tempo de execução seguiu a tendência linear em relação
      a <InlineMath>n + a</InlineMath>.
    </p>
    <img src={benchGraph} />
    <p>
      Abaixo podemos conferir o resultado para cada caso de teste.
    </p>
    <Code language="text" style={GithubGist}>
      {snippets.bench}
    </Code>
  </section>
)

export default Experimentos
