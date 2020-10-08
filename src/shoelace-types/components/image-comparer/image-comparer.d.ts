import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status experimental
 *
 * @slot before - The before image, an `<img>` or `<svg>` element.
 * @slot after - The after image, an `<img>` or `<svg>` element.
 *
 * @part base - The component's base wrapper.
 * @part before - The container that holds the "before" image.
 * @part after - The container that holds the "after" image.
 * @part divider - The divider that separates the images.
 * @part handle - The handle that the user drags to expose the after image.
 */
export declare class ImageComparer {
  base: HTMLElement;
  divider: HTMLElement;
  handle: HTMLElement;
  dividerPosition: number;
  /** The position of the divider as a percentage. */
  position: number;
  handlePositionChange(): void;
  /** Emitted when the slider position changes. */
  slChange: EventEmitter;
  connectedCallback(): void;
  handleDrag(event: any): void;
  handleKeyDown(event: KeyboardEvent): void;
  render(): any;
}
