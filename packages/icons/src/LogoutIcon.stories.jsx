import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {LogoutIcon} from './LogoutIcon';

storiesOf(`Icons|LogoutIcon`, module)
    .add(`default`, () => <LogoutIcon color={color(`color`)} />);
