#ifndef MOD_IO
#define MOD_IO

#include <stdint.h>

#include "../node/node.h"

/**
 * Reads an uint16_t from the standard input
 */
uint32_t readInt();

/**
 * Reads people and their relationships from the stantard input
 * 
 * @param numberOfPeople - number of people to read
 * @param numberOfRealationship - number of relationship between then to read
 */
Node** readPeople(uint16_t numberOfPeople, uint32_t numberOfRelationships);

#endif
