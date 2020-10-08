import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @part base - The component's base wrapper.
 * @part checked-icon - The container that wraps the checked icon.
 * @part prefix - The prefix container.
 * @part label - The menu item label.
 * @part suffix - The suffix container.
 */
export declare class MenuItem {
  /** Set to true to draw the item in a checked state. */
  checked: boolean;
  /**
   * Draws the menu in an active (i.e. or hover/focus), state to indicate the current menu selection. This is used in
   * lieu of standard :hover and :focus states to prevent concurrent interactions from different devices, such as
   * focusing with the keyboard and hovering with the mouse.
   */
  active: boolean;
  /** A unique value to store in the menu item. */
  value: string;
  /** Set to true to draw the menu item in a disabled state. */
  disabled: boolean;
  handleActiveChange(): void;
  /** Emitted when the menu item becomes active. */
  slActivate: EventEmitter;
  /** Emitted when the menu item becomes inactive. */
  slDeactivate: EventEmitter;
  render(): any;
}
