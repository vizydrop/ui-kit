import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ClockIcon} from './ClockIcon';

storiesOf(`Icons|ClockIcon`, module)
    .add(`default`, () => <ClockIcon color={color(`color`)} />);
