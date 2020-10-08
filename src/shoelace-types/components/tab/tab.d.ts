/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tab's label.
 *
 * @part base - The component's base wrapper.
 */
export declare class Tab {
  componentId: string;
  tab: HTMLElement;
  host: HTMLSlTabElement;
  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  panel: string;
  /** Set to true to draw the tab in an active state. */
  active: boolean;
  /** Set to true to draw the tab in a disabled state. */
  disabled: boolean;
  /** Sets focus to the tab. */
  setFocus(): Promise<void>;
  /** Removes focus from the tab. */
  removeFocus(): Promise<void>;
  render(): any;
}
