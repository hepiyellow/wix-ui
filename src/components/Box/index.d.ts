/// <reference types="react" />
import { BoxProps } from './Box';
import { ThemedComponentProps } from 'wix-ui-jss';
import * as React from 'react';
import { WixComponentProps } from '../../createHOC/index';
export { BoxProps };
export declare const Box: React.ComponentClass<BoxProps & ThemedComponentProps & WixComponentProps>;
export default Box;
