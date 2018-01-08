export declare const dropdownContentDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    optionAt: (index: any) => {
        click: () => any;
        containsClass: (className: any) => any;
    };
};
