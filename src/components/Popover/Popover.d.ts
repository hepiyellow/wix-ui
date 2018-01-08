/// <reference types="react" />
import * as React from 'react';
import PopperJS from 'popper.js';
export declare type PopoverClasses = {
    popoverContent: string;
    arrow: string;
};
export declare type Placement = PopperJS.Placement;
export interface PopoverProps {
    placement: Placement;
    shown: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    classes?: PopoverClasses;
    arrowStyle?: string;
}
export declare type PopoverType = React.SFC<PopoverProps> & {
    Element?: React.SFC;
    Content?: React.SFC;
};
declare const _default: any;
export default _default;
