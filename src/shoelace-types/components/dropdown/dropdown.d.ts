import { EventEmitter } from '../../stencil-public-runtime';
import Popover from '../../utilities/popover';
/**
 * @since 2.0
 * @status stable
 *
 * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.
 * @slot - The dropdown's content.
 *
 * @part base - The component's base wrapper.
 * @part trigger - The container that wraps the trigger.
 * @part panel - The panel that gets shown when the dropdown is open.
 */
export declare class Dropdown {
  componentId: string;
  isShowing: boolean;
  panel: HTMLElement;
  positioner: HTMLElement;
  popover: Popover;
  trigger: HTMLElement;
  host: HTMLSlDropdownElement;
  /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
  /** Determines whether the dropdown should hide when a menu item is selected. */
  closeOnSelect: boolean;
  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  containingElement: HTMLElement;
  /** The distance in pixels from which to offset the panel away from its trigger. */
  distance: number;
  /** The distance in pixels from which to offset the panel along its trigger. */
  skidding: number;
  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  hoist: boolean;
  /** Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. */
  slShow: EventEmitter;
  /** Emitted after the dropdown opens and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. */
  slHide: EventEmitter;
  /** Emitted after the dropdown closes and all transitions are complete. */
  slAfterHide: EventEmitter;
  handleOpenChange(): void;
  handlePopoverOptionsChange(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Shows the dropdown panel */
  show(): Promise<void>;
  /** Hides the dropdown panel */
  hide(): Promise<void>;
  focusOnTrigger(): void;
  getMenu(): HTMLSlMenuElement;
  handleDocumentKeyDown(event: KeyboardEvent): void;
  handleDocumentMouseDown(event: MouseEvent): void;
  handleMenuItemActivate(event: CustomEvent): void;
  handlePanelSelect(event: CustomEvent): void;
  handleTriggerClick(): void;
  handleTriggerKeyDown(event: KeyboardEvent): void;
  handleTriggerKeyUp(event: KeyboardEvent): void;
  render(): any;
}
