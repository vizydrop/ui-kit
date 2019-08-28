import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {BrokenChartIcon} from './BrokenChartIcon';

storiesOf(`Icons|BrokenChartIcon`, module)
    .add(`default`, () => <BrokenChartIcon color={color(`color`)} />);
