import { Placement } from '../Popover/Popover';
import { Option } from '../Dropdown/DropdownContent/DropdownContent';
import { CLICK_TYPE, HOVER_TYPE } from '../Dropdown/constants';
export interface InputWithOptionsClasses {
}
export interface InputWithOptionsProps {
    placement?: Placement;
    classes?: InputWithOptionsClasses;
    options: Array<Option>;
    openTrigger?: CLICK_TYPE | HOVER_TYPE;
    onSelect?: (option: Option) => void;
    onDeselect?: (option: Option) => void;
    initialSelectedIds?: Array<string | number>;
    closeOnSelect?: boolean;
}
declare const _default: any;
export default _default;
