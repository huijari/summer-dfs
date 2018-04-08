(include "node.h")

(include <stdlib.h>)

(function node_new ((uint16_t age)) -> Node*
	(decl ((Node* node = (malloc (sizeof Node)))))
	(= node->promoter (< age 35))
	(= node->visited false)
	(= node->neighbors NULL)
	(return node))

(function node_drop ((Node* node)) -> void
	(stack_drain node->neighbors)
	(free node))

(function node_countPromoters ((Node** people) (uint16_t initial)) -> uint16_t
	(decl ((Stack* frontier = (stack_push NULL initial))
				 (uint16_t count = 0)))
	(= people[initial]->visited true)

	(while (! (stack_isEmpty frontier))
		(decl ((Node* actual = people[frontier->value])))
		(= frontier (stack_pop frontier))

		(when actual->promoter
			count++

			(decl ((Stack* iter = actual->neighbors)))
			(while (! (stack_isEmpty iter))
				(when (! people[iter->value]->visited)
					(= frontier (stack_push frontier iter->value))
					(= people[iter->value]->visited true))
				(= iter iter->next))))
	(return count))
