/**
 * @since 2.0
 * @status stable
 *
 * @slot - The card's body.
 * @slot header - The card's header.
 * @slot footer - The card's footer.
 * @slot image - The card's image.
 *
 * @part base - The component's base wrapper.
 * @part image - The card's image, if present.
 * @part header - The card's header, if present.
 * @part body - The card's body.
 * @part footer - The card's footer, if present.
 */
export declare class Card {
  host: HTMLSlCardElement;
  hasFooter: boolean;
  hasImage: boolean;
  hasHeader: boolean;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  updateSlots(): void;
  render(): any;
}
