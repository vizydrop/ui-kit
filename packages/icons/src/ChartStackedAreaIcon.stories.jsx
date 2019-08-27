import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartStackedAreaIcon} from './ChartStackedAreaIcon';

storiesOf(`Icons|ChartStackedAreaIcon`, module)
    .add(`default`, () => <ChartStackedAreaIcon color={color(`color`)} />);
