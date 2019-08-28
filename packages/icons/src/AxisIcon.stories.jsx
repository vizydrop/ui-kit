import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {AxisIcon} from './AxisIcon';

storiesOf(`Icons|AxisIcon`, module)
    .add(`default`, () => <AxisIcon color={color(`color`)} />);
