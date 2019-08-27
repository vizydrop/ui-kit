import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {LockIcon} from './LockIcon';

storiesOf(`Icons|LockIcon`, module)
    .add(`default`, () => <LockIcon color={color(`color`)} />);
