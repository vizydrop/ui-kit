import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartStackedBarIcon} from './ChartStackedBarIcon';

storiesOf(`Icons|ChartStackedBarIcon`, module)
    .add(`default`, () => <ChartStackedBarIcon color={color(`color`)} />);
