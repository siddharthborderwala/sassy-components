import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @part base - The component's base wrapper.
 * @part header - The summary header.
 * @part summary - The details summary.
 * @part summary-icon - The expand/collapse summary icon.
 * @part content - The details content.
 */
export declare class Details {
  body: HTMLElement;
  componentId: string;
  details: HTMLElement;
  header: HTMLElement;
  isShowing: boolean;
  /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
  summary: string;
  /** Set to true to prevent the user from toggling the details. */
  disabled: boolean;
  handleOpenChange(): void;
  /** Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened. */
  slShow: EventEmitter;
  /** Emitted after the details opens and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed. */
  slHide: EventEmitter;
  /** Emitted after the details closes and all transitions are complete. */
  slAfterHide: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Shows the alert. */
  show(): Promise<void>;
  /** Hides the alert */
  hide(): Promise<void>;
  handleBodyTransitionEnd(event: TransitionEvent): void;
  handleSummaryClick(): void;
  handleSummaryKeyDown(event: KeyboardEvent): void;
  render(): any;
}
