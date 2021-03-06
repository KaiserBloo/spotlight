import type { SpotlightContextValue } from './Spotlight.context';
import type { SpotlightAction } from './types';
export declare const SPOTLIGHT_EVENTS: {
    readonly open: "mantine:open-spotlight";
    readonly close: "mantine:close-spotlight";
    readonly toggle: "mantine:toggle-spotlight";
    readonly triggerAction: "mantine:trigger-spotlight-action";
    readonly registerActions: "mantine:register-spotlight-actions";
    readonly removeActions: "mantine:remove-spotlight-actions";
};
export declare function openSpotlight(): void;
export declare function closeSpotlight(): void;
export declare function toggleSpotlight(): void;
export declare function triggerSpotlightAction(actionId: string): void;
export declare function registerSpotlightActions(actions: SpotlightAction[]): void;
export declare function removeSpotlightActions(actionsIds: string[]): void;
export declare function removeAllSpotlightActions(): void;
export declare function useSpotlightEvents(ctx: SpotlightContextValue): void;
//# sourceMappingURL=events.d.ts.map