import React from 'react'

import { InlineMath } from 'react-katex'

import formulas from '../formulas'

const Analise = () => (
  <section>
    <h2>3 Análise de Complexidade</h2>
    <p>
      Para o desenvolvimento do algorítmo foi utilizado uma estrutura de pilha, onde os métodos têm complexidade:
    </p>
    <ul>
      <li><code>push</code>: <InlineMath>{formulas.o1}</InlineMath></li>
      <li><code>pop</code>: <InlineMath>{formulas.o1}</InlineMath></li>
      <li><code>isEmpty</code>: <InlineMath>{formulas.o1}</InlineMath></li>
    </ul>
    <p>
      Na busca verificamos um nó no máximo uma vez, o que nos dá uma complexidade
      de <InlineMath>{formulas.on}</InlineMath> onde <InlineMath>n</InlineMath> é o número de nós. Do mesmo jeito,
      vemos que passamos por cada aresta um máximo de uma vez, resultando
      em <InlineMath>{formulas.oa}</InlineMath> onde <InlineMath>a</InlineMath> é o número de arestas. A
      complexidade da busca então resulta em <InlineMath>{formulas.dfs}</InlineMath>.
    </p>
    <p>
      Como nós não precisamos de espaço adicional, apenas para a pilha durante a busca, a complexidade
      espacial se dá por <InlineMath>O(n)</InlineMath>.
    </p>
  </section>
)

export default Analise
