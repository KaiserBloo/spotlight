import type { SpotlightAction } from '../types';
export declare function useActionsState(initialActions: SpotlightAction[] | ((query: string) => SpotlightAction[]), query: string): readonly [SpotlightAction[], {
    readonly registerActions: (payload: SpotlightAction[]) => void;
    readonly updateActions: (payload: SpotlightAction[] | ((query: string) => SpotlightAction[])) => void;
    readonly removeActions: (ids?: string[]) => void;
    readonly triggerAction: (id: string) => void;
}];
//# sourceMappingURL=use-actions-state.d.ts.map