import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {UpgradeIcon} from './UpgradeIcon';

storiesOf(`Icons|UpgradeIcon`, module)
    .add(`default`, () => <UpgradeIcon color={color(`color`)} />);
