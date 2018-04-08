#ifndef MOD_STACK
#define MOD_STACK

#include <stdint.h>
#include <stdbool.h>

typedef struct Stack Stack;
struct Stack {
	uint16_t value;
	Stack* next;
};

/**
 * Pushes an item to the stack
 * 
 * @param stack - target
 * @param value - the item
 */
Stack* stack_push(Stack* stack, uint16_t value);

/**
 * Removes an item from the stack
 * 
 * @param stack - target
 */
Stack* stack_pop(Stack* stack);

/**
 * Returns true if the stack is empty
 * 
 * @param stack - target
 */
bool stack_isEmpty(Stack* stack);

/**
 * Frees the memory used by the stack, removing every item
 * 
 * @param stack - target
 */
void stack_drain(Stack* stack);

#endif
