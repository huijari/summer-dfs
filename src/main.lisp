(include <stdint.h>)
(include <stdio.h>)
(include <stdlib.h>)

(include "io/io.h")
(include "node/node.h")

(function main () -> int
	(decl ((uint16_t numberOfPeople = (readInt))
				 (uint32_t numberOfRelationships = (readInt))
				 (Node** people = (readPeople numberOfPeople numberOfRelationships))
				 (uint16_t initial = (- (readInt) 1))
				 (uint16_t result = (node_countPromoters people initial))))

	(printf "%hu\\n" result)

	(for ((uint16_t i = 0) (< i numberOfPeople) i++)
		(if (!= people[i] NULL)
			(node_drop people[i])))
	(free people)

	(return 0))
