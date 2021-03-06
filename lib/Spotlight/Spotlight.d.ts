import React from 'react';
import { MantineTransition, DefaultProps, Selectors, MantineShadow, MantineNumberSize, MantineColor } from '@mantine/core';
import { DefaultActionProps } from '../DefaultAction/DefaultAction';
import { ActionsListStylesNames } from '../ActionsList/ActionsList';
import type { SpotlightAction } from '../types';
import useStyles from './Spotlight.styles';
export declare type SpotlightStylesNames = Selectors<typeof useStyles> | ActionsListStylesNames;
export interface InnerSpotlightProps extends DefaultProps<SpotlightStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    /** Should spotlight be rendered within Portal */
    withinPortal?: boolean;
    /** Premade transition or transition object */
    transition?: MantineTransition;
    /** Transition duration in ms, set to 0 to disable all transitions */
    transitionDuration?: number;
    /** Backdrop overlay color, e.g. #000 */
    overlayColor?: string;
    /** Backdrop overlay opacity (0-1), e.g. 0.65 */
    overlayOpacity?: number;
    /** Backdrop overlay blur in px */
    overlayBlur?: number;
    /** Value from theme.shadows or any valid css box-shadow value */
    shadow?: MantineShadow;
    /** Radius from theme.radius, or number to set border-radius in px, defaults to theme.defaultRadius */
    radius?: MantineNumberSize;
    /** Should spotlight be rendered in the center of the screen */
    centered?: boolean;
    /** Max spotlight width */
    maxWidth?: number;
    /** Top offset when spotlight is not centered */
    topOffset?: number;
    /** Search input placeholder */
    searchPlaceholder?: string;
    /** Search input icon */
    searchIcon?: React.ReactNode;
    /** Function used to determine how actions will be filtered based on user input */
    filter?(query: string, actions: SpotlightAction[]): SpotlightAction[];
    /** Message displayed when actions were not found */
    nothingFoundMessage?: React.ReactNode;
    /** Number of actions displayed at a time */
    limit?: number;
    /** Should spotlight be closed when action is triggered */
    closeOnActionTrigger?: boolean;
    /** Component that is used to render actions */
    actionComponent?: React.FC<DefaultActionProps>;
    /** Component that is used to wrap actions list */
    actionsWrapperComponent?: React.FC<{
        children: React.ReactNode;
    }> | string;
    /** Spotlight z-index */
    zIndex?: number;
    /** Should user query be highlighted in actions title */
    highlightQuery?: boolean;
    /** The highlight color */
    highlightColor?: MantineColor;
}
interface SpotlightProps extends InnerSpotlightProps {
    actions: SpotlightAction[];
    onClose(): void;
    opened: boolean;
    query: string;
    onQueryChange(query: string): void;
}
export declare function Spotlight({ query, onQueryChange, actions, onClose, opened, withinPortal, transition, transitionDuration, classNames, styles, overlayColor, overlayOpacity, overlayBlur, shadow, radius, centered, closeOnActionTrigger, highlightQuery, highlightColor, maxWidth, topOffset, className, searchPlaceholder, searchIcon, filter, nothingFoundMessage, limit, actionComponent, actionsWrapperComponent: ActionsWrapper, zIndex, ...others }: SpotlightProps): JSX.Element;
export declare namespace Spotlight {
    var displayName: string;
}
export {};
//# sourceMappingURL=Spotlight.d.ts.map