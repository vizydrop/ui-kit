import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {SettingsIcon} from './SettingsIcon';

storiesOf(`Icons|SettingsIcon`, module)
    .add(`default`, () => <SettingsIcon color={color(`color`)} />);
