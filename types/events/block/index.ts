import { BlockAddedMutationType, type BlockAddedEvent } from './BlockAdded';
import { BlockChangedMutationType, type BlockChangedEvent } from './BlockChanged';
import { BlockMovedMutationType, type BlockMovedEvent } from './BlockMoved';
import { BlockRemovedMutationType, type BlockRemovedEvent } from './BlockRemoved';

/**
 * Map for Custom Events related to block mutation types
 */
export interface BlockMutationEventMap {
  /**
   * New Block added
   */
  [BlockAddedMutationType]: BlockAddedEvent;

  /**
   * On Block deletion
   */
  [BlockRemovedMutationType]: BlockRemovedEvent;

  /**
   * Moving of a Block
   */
  [BlockMovedMutationType]: BlockMovedEvent;

  /**
   * Any changes inside the Block
   */
  [BlockChangedMutationType]: BlockChangedEvent;
}

/**
 * What kind of modification happened with the Block
 */
export type BlockMutationType = keyof BlockMutationEventMap;

/**
 * Returns a union type of values of passed object
 */
type ValueOf<T> = T[keyof T];

/**
 * CustomEvent describing a change related to a block
 */
export type BlockMutationEvent = ValueOf<BlockMutationEventMap>;
