import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartScatterPlotIcon} from './ChartScatterPlotIcon';

storiesOf(`Icons|ChartScatterPlotIcon`, module)
    .add(`default`, () => <ChartScatterPlotIcon color={color(`color`)} />);
