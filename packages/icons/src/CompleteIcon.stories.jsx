import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {CompleteIcon} from './CompleteIcon';

storiesOf(`Icons|CompleteIcon`, module)
    .add(`default`, () => <CompleteIcon color={color(`color`)} />);
