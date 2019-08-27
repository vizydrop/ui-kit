import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {BackIcon} from './BackIcon';

storiesOf(`Icons|BackIcon`, module)
    .add(`default`, () => <BackIcon color={color(`color`)} />);
