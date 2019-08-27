import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartAreaIcon} from './ChartAreaIcon';

storiesOf(`Icons|ChartAreaIcon`, module)
    .add(`default`, () => <ChartAreaIcon color={color(`color`)} />);
