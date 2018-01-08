/// <reference types="react" />
import { PopoverProps } from './Popover';
import { ThemedComponentProps } from 'wix-ui-jss';
import * as React from 'react';
import { WixComponentProps } from '../../createHOC/index';
export { PopoverProps };
export declare const Popover: React.StatelessComponent<PopoverProps> & {
    Element?: React.StatelessComponent<{}>;
    Content?: React.StatelessComponent<{}>;
} & React.ComponentClass<PopoverProps & ThemedComponentProps & WixComponentProps>;
export default Popover;
