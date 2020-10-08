import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The alert's content.
 * @slot icon - An icon to show in the alert.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the alert icon.
 * @part message - The alert message.
 * @part close-button - The close button.
 */
export declare class Alert {
  alert: HTMLElement;
  autoHideTimeout: any;
  isShowing: boolean;
  host: HTMLSlAlertElement;
  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /** Set to true to make the alert closable. */
  closable: boolean;
  /** The type of alert. */
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with the
   * alert before it closes (e.g. moves the mouse over it), the timer will restart.
   */
  duration: number;
  handleOpenChange(): void;
  handleDurationChange(): void;
  /** Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened. */
  slShow: EventEmitter;
  /** Emitted after the alert opens and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed. */
  slHide: EventEmitter;
  /** Emitted after the alert closes and all transitions are complete. */
  slAfterHide: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  /** Shows the alert. */
  show(): Promise<void>;
  /** Hides the alert */
  hide(): Promise<void>;
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  toast(): Promise<unknown>;
  handleCloseClick(): void;
  handleMouseMove(): void;
  handleTransitionEnd(event: TransitionEvent): void;
  restartAutoHide(): void;
  render(): any;
}
