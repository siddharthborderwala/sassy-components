import { EventEmitter } from '../../stencil-public-runtime';
interface FormControl {
  tag: string;
  serialize: (el: HTMLElement, formData: FormData) => void;
  click?: (event: MouseEvent) => any;
  keyDown?: (event: KeyboardEvent) => any;
}
/**
 * @since 2.0
 * @status experimental
 *
 * @slot - The form's content.
 *
 * @part base - The component's base wrapper.
 */
export declare class Form {
  form: HTMLElement;
  formControls: FormControl[];
  /** Prevent the form from validating inputs before submitting. */
  novalidate: boolean;
  /**
   * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an
   * invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this
   * event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional
   * around the XHR request you use to submit the form's data with.
   */
  slSubmit: EventEmitter;
  connectedCallback(): void;
  /** Serializes all form controls elements and returns a `FormData` object. */
  getFormData(): Promise<FormData>;
  /** Gets all form control elements (native and custom). */
  getFormControls(): Promise<HTMLElement[]>;
  /**
   * Submits the form. If all controls are valid, the `slSubmit` event will be emitted and the promise will resolve with
   * `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
   */
  submit(): Promise<boolean>;
  handleClick(event: MouseEvent): void;
  handleKeyDown(event: KeyboardEvent): void;
  serializeElement(el: HTMLElement, formData: FormData): void;
  render(): any;
}
export {};
