import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils';

import inputDriverFactory from '../components/Input/Input.protractor.driver';
export const inputTestkitFactory = protractorTestkitFactoryCreator(inputDriverFactory);

import {buttonDriverFactory} from '../components/Button/Button.protractor.driver';
export const buttonTestkitFactory = protractorTestkitFactoryCreator(buttonDriverFactory);

import {paginationDriverFactory} from '../components/Pagination/Pagination.protractor.driver';
export const paginationTestkitFactory = protractorTestkitFactoryCreator(paginationDriverFactory);

import {badgeDriverFactory} from '../components/Badge/Badge.protractor.driver';
export const badgeTestkitFactory = protractorTestkitFactoryCreator(badgeDriverFactory);

import {toggleSwitchDriverFactory} from '../components/ToggleSwitch/ToggleSwitch.protractor.driver';
export const toggleSwitchTestkitFactory = protractorTestkitFactoryCreator(toggleSwitchDriverFactory);

import {tooltipDriverFactory} from '../components/Tooltip/Tooltip.protractor.driver';
export const tooltipTestkitFactory = protractorTestkitFactoryCreator(tooltipDriverFactory);

import {dividerDriverFactory} from '../components/Divider/Divider.protractor.driver';
export const dividerTestkitFactory = protractorTestkitFactoryCreator(dividerDriverFactory);
