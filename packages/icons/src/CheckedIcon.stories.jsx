import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {CheckedIcon} from './CheckedIcon';

storiesOf(`Icons|CheckedIcon`, module)
    .add(`default`, () => <CheckedIcon color={color(`color`)} />);
