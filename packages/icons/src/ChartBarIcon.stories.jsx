import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartBarIcon} from './ChartBarIcon';

storiesOf(`Icons|ChartBarIcon`, module)
    .add(`default`, () => <ChartBarIcon color={color(`color`)} />);
