import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ConnectIcon} from './ConnectIcon';

storiesOf(`Icons|ConnectIcon`, module)
    .add(`default`, () => <ConnectIcon color={color(`color`)} />);
