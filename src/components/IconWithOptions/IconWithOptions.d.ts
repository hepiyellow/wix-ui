import { Placement } from '../Popover/Popover';
import { Option } from '../Dropdown/DropdownContent/DropdownContent';
import { CLICK_TYPE, HOVER_TYPE } from '../Dropdown/constants';
export interface IconWithOptionsClasses {
}
export interface IconWithOptionsProps {
    placement?: Placement;
    classes?: IconWithOptionsClasses;
    options: Array<Option>;
    openTrigger?: CLICK_TYPE | HOVER_TYPE;
    onSelect?: (option: Option) => void;
    onDeselect?: (option: Option) => void;
    initialSelectedIds?: Array<string | number>;
    closeOnSelect?: boolean;
    iconUrl: string;
}
declare const _default: any;
export default _default;
