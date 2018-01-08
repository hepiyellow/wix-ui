/// <reference types="react" />
import * as React from 'react';
export declare type InputClasses = {
    input: string;
};
export interface InputProps {
    classes?: InputClasses;
    disabled?: boolean;
    autoComplete?: 'on' | 'off';
    autoFocus?: boolean;
    name?: string;
    onBlur?: React.EventHandler<React.FocusEvent<HTMLInputElement>>;
    onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    onFocus?: React.EventHandler<React.FocusEvent<HTMLInputElement>>;
    onClick?: React.EventHandler<React.MouseEvent<HTMLInputElement>>;
    onDoubleClick?: React.EventHandler<React.MouseEvent<HTMLInputElement>>;
    onKeyDown?: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
    onKeyUp?: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    type?: string;
    value?: string;
}
declare const _default: any;
export default _default;
