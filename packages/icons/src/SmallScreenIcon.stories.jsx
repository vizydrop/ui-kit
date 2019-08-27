import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {SmallScreenIcon} from './SmallScreenIcon';

storiesOf(`Icons|SmallScreenIcon`, module)
    .add(`default`, () => <SmallScreenIcon color={color(`color`)} />);
