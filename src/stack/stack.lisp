(include "stack.h")

(include <stdlib.h>)

(function stack_push ((Stack* next) (uint16_t value)) -> Stack*
	(decl ((Stack* stack = (malloc (sizeof Stack)))))
	(= stack->value value)
	(= stack->next next)
	(return stack))

(function stack_pop ((Stack* stack)) -> Stack*
	(assert (! (stack_isEmpty stack)))
	(decl ((Stack* next = stack->next)))
	(free stack)
	(return next))

(function stack_isEmpty ((Stack* stack)) -> bool
	(return (== stack NULL)))

(function stack_drain ((Stack* stack)) -> void
	(while (! (stack_isEmpty stack))
		(= stack (stack_pop stack))))
