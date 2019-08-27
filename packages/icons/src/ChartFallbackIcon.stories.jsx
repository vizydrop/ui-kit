import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ChartFallbackIcon} from './ChartFallbackIcon';

storiesOf(`Icons|ChartFallbackIcon`, module)
    .add(`default`, () => <ChartFallbackIcon color={color(`color`)} />);
