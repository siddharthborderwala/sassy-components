import { EventEmitter } from '../../stencil-public-runtime';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The select's options in the form of menu items.
 * @slot help-text - Help text that describes how to use the select.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label and the input.
 * @part help-text - The select's help text.
 * @part icon - The select's icon.
 * @part label - The select's label.
 * @part menu - The select menu, a <sl-menu> element.
 * @part tag - The multiselect option, a <sl-tag> element.
 * @part tags - The container in which multiselect options are rendered.
 * @part input - The select's input control, exported from <sl-input>.
 * @part label - The select's label, exported from <sl-input>.
 * @part prefix - The select's prefix, exported from <sl-input>.
 * @part clear-button - The input's clear button, exported from <sl-input>.
 * @part suffix - The select's suffix, exported from <sl-input>.
 * @part help-text - The select's help text, exported from <sl-input>.
 */
export declare class Select {
  dropdown: HTMLSlDropdownElement;
  input: HTMLSlInputElement;
  inputId: string;
  labelId: string;
  helpTextId: string;
  menu: HTMLSlMenuElement;
  resizeObserver: ResizeObserver;
  host: HTMLSlSelectElement;
  hasFocus: boolean;
  isOpen: boolean;
  items: any[];
  displayLabel: string;
  displayTags: any[];
  /** Set to true to enable multiselect. */
  multiple: boolean;
  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   */
  maxTagsVisible: number;
  /** Set to true to disable the select control. */
  disabled: boolean;
  /** The select's name. */
  name: string;
  /** The select's placeholder text. */
  placeholder: string;
  /** The select's size. */
  size: 'small' | 'medium' | 'large';
  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  hoist: boolean;
  /** The value of the control. This will be a string or an array depending on `multiple`. */
  value: string | Array<string>;
  /** Set to true to draw a pill-style select with rounded edges. */
  pill: boolean;
  /** The select's label. */
  label: string;
  /** The select's required attribute. */
  required: boolean;
  /** Set to true to add a clear button when the select is populated. */
  clearable: boolean;
  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  invalid: boolean;
  handleMultipleChange(): void;
  handleValueChange(): void;
  /** Emitted when the control's value changes. */
  slChange: EventEmitter;
  /** Emitted when the control gains focus */
  slFocus: EventEmitter;
  /** Emitted when the control loses focus */
  slBlur: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): Promise<boolean>;
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string): Promise<void>;
  getItemLabel(item: HTMLSlMenuItemElement): string;
  getItems(): HTMLSlMenuItemElement[];
  getValueAsArray(): string[];
  handleBlur(event: CustomEvent): void;
  handleFocus(event: CustomEvent): void;
  handleClear(): void;
  handleKeyDown(): void;
  handleKeyUp(): void;
  handleCut(event: Event): void;
  handlePaste(event: Event): void;
  handleLabelClick(): void;
  handleMenuSelect(event: CustomEvent): void;
  handleMenuShow(event: CustomEvent): void;
  handleMenuHide(): void;
  handleSlotChange(): void;
  handleTagClick(event: MouseEvent): void;
  handleTagKeyDown(event: KeyboardEvent): void;
  reportDuplicateItemValues(): void;
  resizeMenu(): void;
  syncItemsFromValue(): void;
  syncValueFromItems(): void;
  render(): any;
}
