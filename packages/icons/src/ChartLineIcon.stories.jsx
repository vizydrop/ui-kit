import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartLineIcon} from './ChartLineIcon';

storiesOf(`Icons|ChartLineIcon`, module)
    .add(`default`, () => <ChartLineIcon color={color(`color`)} />);
