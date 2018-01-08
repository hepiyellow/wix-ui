export interface PaginationProps {
    totalPages: number;
    currentPage?: number;
    onChange?: (event: {
        page: string;
    }) => void;
    paginationMode?: 'pages' | 'input';
    showFirstLastNavButtons?: boolean;
    replaceArrowsWithText?: boolean;
    firstText?: string;
    previousText?: string;
    nextText?: string;
    lastText?: string;
    rtl?: boolean;
    width?: number;
    alwaysShowFirstPage?: boolean;
    alwaysShowLastPage?: boolean;
    showInputModeTotalPages?: boolean;
    classes?: {
        [s: string]: string;
    };
}
declare const _default: any;
export default _default;
