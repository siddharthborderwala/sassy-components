import { EventEmitter } from '../../stencil-public-runtime';
import Popover from '../../utilities/popover';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tooltip's target element. Only the first element will be used as the target.
 *
 * @part base - The component's base wrapper.
 */
export declare class Tooltip {
  componentId: string;
  isShowing: boolean;
  popover: Popover;
  tooltipPositioner: HTMLElement;
  target: HTMLElement;
  tooltip: any;
  host: HTMLSlTooltipElement;
  /** The tooltip's content. */
  content: string;
  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   */
  placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
  /** Set to true to disable the tooltip so it won't show when triggered. */
  disabled: boolean;
  /** The distance in pixels from which to offset the tooltip away from its target. */
  distance: number;
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  open: boolean;
  /** The distance in pixels from which to offset the tooltip along its target. */
  skidding: number;
  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   */
  trigger: string;
  handleOpenChange(): void;
  /** Emitted when the tooltip begins to show. Calling `event.preventDefault()` will prevent it from being shown. */
  slShow: EventEmitter;
  /** Emitted after the tooltip has shown and all transitions are complete. */
  slAfterShow: EventEmitter;
  /** Emitted when the tooltip begins to hide. Calling `event.preventDefault()` will prevent it from being hidden. */
  slHide: EventEmitter;
  /** Emitted after the tooltip has hidden and all transitions are complete. */
  slAfterHide: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  /** Shows the tooltip. */
  show(): Promise<void>;
  /** Shows the tooltip. */
  hide(): Promise<void>;
  getTarget(): HTMLElement;
  handleBlur(): void;
  handleClick(): void;
  handleFocus(): void;
  handleMouseOver(): void;
  handleMouseOut(): void;
  handleSlotChange(): void;
  hasTrigger(triggerType: string): boolean;
  syncOptions(): void;
  render(): any;
}
