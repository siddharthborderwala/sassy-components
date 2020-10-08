import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The dialog's content.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @part base - The component's base wrapper.
 * @part overlay - The overlay.
 * @part panel - The dialog panel (where the dialog and its is rendered).
 * @part header - The dialog header.
 * @part title - The dialog title.
 * @part close-button - The close button.
 * @part body - The dialog body.
 * @part footer - The dialog footer.
 *
 */
export declare class Dialog {
  componentId: string;
  dialog: HTMLElement;
  isShowing: boolean;
  panel: HTMLElement;
  host: HTMLSlDialogElement;
  hasFooter: boolean;
  /** Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /**
   * The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  label: string;
  /**
   * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
   * easy, accessible way for users to dismiss the dialog.
   */
  noHeader: boolean;
  handleOpenChange(): void;
  /** Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened. */
  slShow: EventEmitter;
  /** Emitted after the dialog opens and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed. */
  slHide: EventEmitter;
  /** Emitted after the dialog closes and all transitions are complete. */
  slAfterHide: EventEmitter;
  /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the dialog from closing. */
  slOverlayDismiss: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Shows the dialog */
  show(): Promise<void>;
  /** Hides the dialog */
  hide(): Promise<void>;
  handleCloseClick(): void;
  handleDocumentFocusIn(event: Event): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleOverlayClick(): void;
  handleTransitionEnd(event: TransitionEvent): void;
  updateSlots(): void;
  render(): any;
}
