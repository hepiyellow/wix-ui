import { PopoverTheme } from './theme';
export declare const styles: (theme: PopoverTheme) => {
    arrow: {
        width: number;
        height: number;
        borderStyle: string;
        position: string;
        margin: string;
    };
    popoverContent: {
        [x: string]: {
            marginLeft: string;
            '& $arrow': {
                borderWidth: string;
                left: string;
                top: string;
                marginLeft: string;
                marginRight: string;
            };
        } | {
            marginRight: string;
            '& $arrow': {
                borderWidth: string;
                right: string;
                top: string;
                marginLeft: string;
                marginRight: string;
            };
        } | {
            marginTop: string;
            '& $arrow': {
                borderWidth: string;
                top: string;
                left: string;
                marginTop: string;
                marginBottom: string;
            };
        } | {
            marginBottom: string;
            '& $arrow': {
                borderWidth: string;
                bottom: string;
                left: string;
                marginTop: string;
                marginBottom: string;
            };
        };
    };
};
