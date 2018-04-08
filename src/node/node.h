#ifndef MOD_NODE
#define MOD_NODE

#include <stdbool.h>

#include "../stack/stack.h"

typedef struct Node Node;
struct Node {
	bool promoter;
	bool visited;
	Stack* neighbors;
};

/**
 * Creates a new node
 * 
 * @param age - determines if the node is a promoter (age < 35)
 */
Node* node_new(uint16_t age);

/**
 * Frees the memory used by the node
 * 
 * @param node - target
 */
void node_drop(Node* node);

/**
 * Counts how many promoters can listen to the music
 * 
 * @param people - everyone included in the experiment
 * @param initial - the first person to listen to the music
 */
uint16_t node_countPromoters(Node** people, uint16_t initial);

#endif
