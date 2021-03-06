import React from 'react';
import { DefaultProps, Selectors, MantineNumberSize, MantineColor } from '@mantine/core';
import type { SpotlightAction } from '../types';
import type { DefaultActionProps, DefaultActionStylesNames } from '../DefaultAction/DefaultAction';
import useStyles from './ActionsList.styles';
export declare type ActionsListStylesNames = Selectors<typeof useStyles> | DefaultActionStylesNames;
declare type GetGroupOptionsItem<T extends any[]> = {
    type: 'item';
    item: T[number];
    index: number;
};
declare type GetGroupOptionsLabel = {
    type: 'label';
    label: string;
};
export interface ActionsListProps extends DefaultProps<ActionsListStylesNames> {
    actions: (GetGroupOptionsItem<SpotlightAction[]> | GetGroupOptionsLabel)[];
    actionComponent?: React.FC<DefaultActionProps>;
    hovered: number;
    query: string;
    nothingFoundMessage?: React.ReactNode;
    onActionHover(index: number): void;
    onActionTrigger(action: SpotlightAction): void;
    highlightQuery: boolean;
    highlightColor: MantineColor;
    radius: MantineNumberSize;
}
export declare function ActionsList({ actions, styles, classNames, actionComponent: Action, hovered, onActionHover, onActionTrigger, query, nothingFoundMessage, highlightQuery, highlightColor, radius, }: ActionsListProps): JSX.Element;
export declare namespace ActionsList {
    var displayName: string;
}
export {};
//# sourceMappingURL=ActionsList.d.ts.map