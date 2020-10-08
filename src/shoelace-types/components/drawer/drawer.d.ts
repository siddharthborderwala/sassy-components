import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The drawer's content.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @part base - The component's base wrapper.
 * @part overlay - The overlay.
 * @part panel - The drawer panel (where the drawer and its is rendered).
 * @part header - The drawer header.
 * @part title - The drawer title.
 * @part close-button - The close button.
 * @part body - The drawer body.
 * @part footer - The drawer footer.
 */
export declare class Drawer {
  componentId: string;
  drawer: HTMLElement;
  isShowing: boolean;
  panel: HTMLElement;
  host: HTMLSlDrawerElement;
  hasFooter: boolean;
  /** Indicates whether or not the drawer is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /**
   * The drawer's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  label: string;
  /** The direction from which the drawer will open. */
  placement: 'top' | 'right' | 'bottom' | 'left';
  /**
   * By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
   * its parent element, set this prop and add `position: relative` to the parent.
   */
  contained: boolean;
  /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the drawer.
   */
  noHeader: boolean;
  handleOpenChange(): void;
  /** Emitted when the drawer opens. Calling `event.preventDefault()` will prevent it from being opened. */
  slShow: EventEmitter;
  /** Emitted after the drawer opens and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed. */
  slHide: EventEmitter;
  /** Emitted after the drawer closes and all transitions are complete. */
  slAfterHide: EventEmitter;
  /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing. */
  slOverlayDismiss: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Shows the drawer */
  show(): Promise<void>;
  /** Hides the drawer */
  hide(): Promise<void>;
  handleCloseClick(): void;
  handleDocumentFocusIn(event: Event): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleOverlayClick(): void;
  handleTransitionEnd(event: TransitionEvent): void;
  updateSlots(): void;
  render(): any;
}
