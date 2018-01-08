/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../Popover/Popover';
import { ElementProps } from '../../utils';
export interface TooltipProps {
    placement?: Placement;
    classes?: TooltipClasses;
}
export interface TooltipState {
    isOpen: boolean;
}
export declare type TooltipClasses = {
    tooltip: string;
    arrow: string;
};
export declare class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
    static Element: React.SFC<ElementProps>;
    static Content: React.SFC<ElementProps>;
    static defaultProps: {
        placement: string;
    };
    static propTypes: {
        placement: any;
        classes: any;
    };
    constructor(props: any);
    open(): void;
    close(): void;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
