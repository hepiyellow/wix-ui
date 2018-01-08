/// <reference types="react" />
import { TooltipProps } from './Tooltip';
import { ThemedComponentProps } from 'wix-ui-jss';
import * as React from 'react';
import { WixComponentProps } from '../../createHOC/index';
export { TooltipProps };
export declare const Tooltip: React.ComponentClass<TooltipProps & ThemedComponentProps & WixComponentProps> & {
    Content: any;
    Element: any;
};
export default Tooltip;
