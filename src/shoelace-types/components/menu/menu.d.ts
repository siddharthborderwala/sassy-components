import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu's content, including menu items, menu dividers, and menu labels.
 *
 * @part base - The component's base wrapper.
 */
export declare class Menu {
  menu: HTMLElement;
  typeToSelectString: string;
  typeToSelectTimeout: any;
  hasFocus: boolean;
  /** Emitted when the menu gains focus. */
  slFocus: EventEmitter;
  /** Emitted when the menu loses focus. */
  slBlur: EventEmitter;
  /** Emitted when a menu item is selected. */
  slSelect: EventEmitter;
  connectedCallback(): void;
  /** Sets focus on the menu. */
  setFocus(): Promise<void>;
  /** Removes focus from the menu. */
  removeFocus(): Promise<void>;
  /**
   * Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
   * The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
   * internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
   * enabling type-to-select when the menu doesn't have focus.
   */
  typeToSelect(key: string): Promise<void>;
  getItems(): [HTMLSlMenuItemElement];
  getActiveItem(): HTMLSlMenuItemElement;
  setActiveItem(item?: HTMLSlMenuItemElement): void;
  handleFocus(): void;
  handleBlur(): void;
  handleClick(event: MouseEvent): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleMouseOver(event: MouseEvent): void;
  handleMouseOut(): void;
  render(): any;
}
