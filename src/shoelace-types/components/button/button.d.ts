import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @part base - The component's base wrapper.
 * @part prefix - The prefix container.
 * @part label - The button's label.
 * @part suffix - The suffix container.
 * @part caret - The button's caret.
 */
export declare class Button {
  button: HTMLButtonElement;
  hasFocus: boolean;
  /** The button's type. */
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
  /** The button's size. */
  size: 'small' | 'medium' | 'large';
  /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
  caret: boolean;
  /** Set to true to disable the button. */
  disabled: boolean;
  /** Set to true to draw the button in a loading state. */
  loading: boolean;
  /** Set to true to draw a pill-style button with rounded edges. */
  pill: boolean;
  /** Set to true to draw a circle button. */
  circle: boolean;
  /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
  submit: boolean;
  /** An optional name for the button. Ignored when `href` is set. */
  name: string;
  /** An optional value for the button. Ignored when `href` is set. */
  value: string;
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href: string;
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target: '_blank' | '_parent' | '_self' | '_top';
  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  download: string;
  /** Emitted when the button loses focus. */
  slBlur: EventEmitter;
  /** Emitted when the button gains focus. */
  slFocus: EventEmitter;
  connectedCallback(): void;
  /** Sets focus on the button. */
  setFocus(): Promise<void>;
  /** Removes focus from the button. */
  removeFocus(): Promise<void>;
  handleBlur(): void;
  handleFocus(): void;
  handleClick(event: MouseEvent): void;
  render(): any;
}
