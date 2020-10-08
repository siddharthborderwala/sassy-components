import { EventEmitter } from '../../stencil-public-runtime';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @slot help-text - Help text that describes how to use the input.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the textarea and label.
 * @part label - The textarea label.
 * @part textarea - The textarea control.
 * @part help-text - The textarea help text.
 */
export declare class Textarea {
  textareaId: string;
  labelId: string;
  helpTextId: string;
  resizeObserver: ResizeObserver;
  textarea: HTMLTextAreaElement;
  hasFocus: boolean;
  /** The textarea's size. */
  size: 'small' | 'medium' | 'large';
  /** The textarea's name attribute. */
  name: string;
  /** The textarea's value attribute. */
  value: string;
  /** The textarea's label. */
  label: string;
  /** The textarea's placeholder text. */
  placeholder: string;
  /** The number of rows to display by default. */
  rows: number;
  /** Controls how the textarea can be resized. */
  resize: 'none' | 'vertical' | 'auto';
  /** Set to true to disable the textarea. */
  disabled: boolean;
  /** Set to true for a readonly textarea. */
  readonly: boolean;
  /** The minimum length of input that will be considered valid. */
  minlength: number;
  /** The maximum length of input that will be considered valid. */
  maxlength: number;
  /** The textarea's required attribute. */
  required: boolean;
  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `required`,
   * `minlength`, and `maxlength` using the browser's constraint validation API.
   */
  invalid: boolean;
  /** The textarea's autocaptialize attribute. */
  autocapitalize: string;
  /** The textarea's autocorrect attribute. */
  autocorrect: string;
  /** The textarea's autocomplete attribute. */
  autocomplete: string;
  /** The textarea's autofocus attribute. */
  autofocus: boolean;
  /** The textarea's spellcheck attribute. */
  spellcheck: boolean;
  /** The textarea's inputmode attribute. */
  inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  /** Emitted when the control's value changes. */
  slChange: EventEmitter;
  /** Emitted when the control receives input. */
  slInput: EventEmitter;
  /** Emitted when the control gains focus. */
  slFocus: EventEmitter;
  /** Emitted when the control loses focus. */
  slBlur: EventEmitter;
  handleRowsChange(): void;
  handleValueChange(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Sets focus on the textarea. */
  setFocus(): Promise<void>;
  /** Removes focus fromt the textarea. */
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
  handleBlur(): void;
  handleFocus(): void;
  setTextareaHeight(): void;
  render(): any;
}
