import { EventEmitter } from '../../stencil-public-runtime';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part input - The native range input.
 * @part tooltip - The range tooltip.
 */
export declare class Range {
  input: HTMLInputElement;
  output: HTMLElement;
  resizeObserver: ResizeObserver;
  hasFocus: boolean;
  hasTooltip: boolean;
  /** The input's name attribute. */
  name: string;
  /** The input's value attribute. */
  value: number;
  /** Set to true to disable the input. */
  disabled: boolean;
  /**
   * This will be true when the control is in an invalid state. Validity in range inputs is determined by the message
   * provided by the `setCustomValidity` method.
   */
  invalid: boolean;
  /** The input's min attribute. */
  min: number;
  /** The input's max attribute. */
  max: number;
  /** The input's step attribute. */
  step: number;
  /** The preferred placedment of the tooltip. */
  tooltip: 'top' | 'bottom' | 'none';
  /** A function used to format the tooltip's value. */
  tooltipFormatter: (value: number) => string;
  /** Emitted when the control's value changes. */
  slChange: EventEmitter;
  /** Emitted when the control loses focus. */
  slBlur: EventEmitter;
  /** Emitted when the control gains focus. */
  slFocus: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  /** Sets focus on the input. */
  setFocus(): Promise<void>;
  /** Removes focus from the input. */
  removeFocus(): Promise<void>;
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string): Promise<void>;
  handleInput(): void;
  handleBlur(): void;
  handleFocus(): void;
  handleTouchStart(): void;
  syncTooltip(): void;
  render(): any;
}
