/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../Popover/Popover';
import { Option } from './DropdownContent/DropdownContent';
import { CLICK_TYPE, HOVER_TYPE } from './constants';
export declare type DropdownClasses = {};
export interface TriggerElementProps {
    onKeyDown(evt: React.KeyboardEvent<HTMLElement>): any;
}
export interface DropdownProps {
    placement: Placement;
    classes?: DropdownClasses;
    children: (triggerElementProps: TriggerElementProps) => React.ReactNode;
    options: Array<Option>;
    openTrigger: CLICK_TYPE | HOVER_TYPE;
    onSelect: (option: Option) => void;
    onDeselect: (option: Option) => void;
    initialSelectedIds: Array<string | number>;
    closeOnSelect: boolean;
}
declare const _default: any;
export default _default;
