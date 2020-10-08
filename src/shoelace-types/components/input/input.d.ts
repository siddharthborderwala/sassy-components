import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status stable
 *
 * @slot prefix - Used to prepend an icon or similar element to the input.
 * @slot suffix - Used to append an icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Help text that describes how to use the input.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label and the input.
 * @part label - The input label.
 * @part input - The input control.
 * @part prefix - The input prefix container.
 * @part clear-button - The clear button.
 * @part password-toggle-button - The password toggle button.
 * @part suffix - The input suffix container.
 * @part help-text - The input help text.
 */
export declare class Input {
  inputId: string;
  labelId: string;
  helpTextId: string;
  input: HTMLInputElement;
  host: HTMLSlInputElement;
  hasFocus: boolean;
  isPasswordVisible: boolean;
  /** The input's type. */
  type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
  /** The input's size. */
  size: 'small' | 'medium' | 'large';
  /** The input's name attribute. */
  name: string;
  /** The input's value attribute. */
  value: string;
  /** Set to true to draw a pill-style input with rounded edges. */
  pill: boolean;
  /** The input's label. */
  label: string;
  /** The input's placeholder text. */
  placeholder: string;
  /** Set to true to disable the input. */
  disabled: boolean;
  /** Set to true to make the input readonly. */
  readonly: boolean;
  /** The minimum length of input that will be considered valid. */
  minlength: number;
  /** The maximum length of input that will be considered valid. */
  maxlength: number;
  /** The input's minimum value. */
  min: number;
  /** The input's maximum value. */
  max: number;
  /** The input's step attribute. */
  step: number;
  /** A pattern to validate input against. */
  pattern: string;
  /** Set to true to make the input a required field. */
  required: boolean;
  /** The input's autocaptialize attribute. */
  autocapitalize: string;
  /** The input's autocorrect attribute. */
  autocorrect: string;
  /** The input's autocomplete attribute. */
  autocomplete: string;
  /** The input's autofocus attribute. */
  autofocus: boolean;
  /** Enables spell checking on the input. */
  spellcheck: boolean;
  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
   */
  invalid: boolean;
  /** Set to true to add a clear button when the input is populated. */
  clearable: boolean;
  /** Set to true to add a password toggle button for password inputs. */
  togglePassword: boolean;
  /** The input's inputmode attribute. */
  inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  handleValueChange(): void;
  /** Emitted when the control's value changes. */
  slChange: EventEmitter;
  /** Emitted when the clear button is activated. */
  slClear: EventEmitter;
  /** Emitted when the control receives input. */
  slInput: EventEmitter;
  /** Emitted when the control gains focus. */
  slFocus: EventEmitter;
  /** Emitted when the control loses focus. */
  slBlur: EventEmitter;
  connectedCallback(): void;
  /** Sets focus on the input. */
  setFocus(): Promise<void>;
  /** Removes focus from the input. */
  removeFocus(): Promise<void>;
  /** Selects all the text in the input. */
  select(): Promise<void>;
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): Promise<void>;
  /** Replaces a range of text with a new string. */
  setRangeText(replacement: string, start: number, end: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): Promise<void>;
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): Promise<boolean>;
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string): Promise<void>;
  handleChange(): void;
  handleInput(): void;
  handleInvalid(): void;
  handleBlur(): void;
  handleFocus(): void;
  handleClearClick(event: MouseEvent): void;
  handlePasswordToggle(): void;
  render(): any;
}
