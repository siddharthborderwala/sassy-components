import { EventEmitter } from '../../stencil-public-runtime';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @slot nav - Used for grouping tabs in the tab group.
 * @slot - Used for grouping tab panels in the tab group.
 *
 * @part base - The component's base wrapper.
 * @part nav - The tab group navigation container.
 * @part tabs - The container that wraps the slotted tabs.
 * @part active-tab-indicator - An element that displays the currently selected tab. This is a child of the tabs container.
 * @part body - The tab group body where tab panels are slotted in.
 */
export declare class TabGroup {
  activeTab: HTMLSlTabElement;
  activeTabIndicator: HTMLElement;
  body: HTMLElement;
  mutationObserver: MutationObserver;
  nav: HTMLElement;
  resizeObserver: ResizeObserver;
  tabGroup: HTMLElement;
  tabs: HTMLElement;
  host: HTMLSlTabGroupElement;
  canScrollHorizontally: boolean;
  /** The placement of the tabs. */
  placement: 'top' | 'bottom' | 'left' | 'right';
  handlePlacementChange(): void;
  /** Emitted when a tab is shown. */
  slTabShow: EventEmitter;
  /** Emitted when a tab is hidden. */
  slTabHide: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** Shows the specified tab panel. */
  show(panel: string): Promise<void>;
  getAllTabs(includeDisabled?: boolean): [HTMLSlTabElement];
  getAllPanels(): [HTMLSlTabPanelElement];
  getActiveTab(): HTMLSlTabElement;
  handleClick(event: MouseEvent): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleScrollLeft(): void;
  handleScrollRight(): void;
  setActiveTab(tab: HTMLSlTabElement, emitEvents?: boolean): void;
  setAriaLabels(): void;
  syncActiveTabIndicator(): void;
  syncHorizontalScroll(): void;
  render(): any;
}
