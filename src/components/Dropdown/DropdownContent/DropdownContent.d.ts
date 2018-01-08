/// <reference types="react" />
import * as React from 'react';
export declare type DropdownContentClasses = {
    optionsContainer: string;
    option: string;
};
export interface Option {
    id: number | string;
    isDisabled: boolean;
    isSelectable: boolean;
    render: () => React.ReactNode;
}
export interface DropdownContentProps {
    options: Array<Option>;
    onOptionClick: (option: Option) => void;
    selectedIds: Array<string | number>;
    classes?: DropdownContentClasses;
    keyboardEvent?: string;
}
declare const _default: any;
export default _default;
