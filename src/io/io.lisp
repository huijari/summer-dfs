(include "io.h")

(include <stdio.h>)
(include <stdlib.h>)

(function readInt () -> uint32_t
	(decl ((uint32_t value)))
	(scanf "%u" &value)
	(return value))

(function readPeople
	((uint16_t numberOfPeople) (uint32_t numberOfRelationships)) -> Node**

	(decl ((Node** people = (malloc (* (sizeof Node*) numberOfPeople)))))
	(for ((uint16_t i = 0) (< i numberOfPeople) i++)
		(decl ((uint16_t id = (- (readInt) 1))
					 (uint16_t age = (readInt))))
		(= people[id] (node_new age)))

	(for ((uint32_t i = 0) (< i numberOfRelationships) i++)
		(decl ((uint16_t from = (- (readInt) 1))
					 (uint16_t to = (- (readInt) 1))))
		(= people[from]->neighbors (stack_push people[from]->neighbors to))
		(= people[to]->neighbors (stack_push people[to]->neighbors from)))

	(return people))
