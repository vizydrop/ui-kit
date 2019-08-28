import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {DatePickerIcon} from './DatePickerIcon';

storiesOf(`Icons|DatePickerIcon`, module)
    .add(`default`, () => <DatePickerIcon color={color(`color`)} />);
