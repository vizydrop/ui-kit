import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {MoveIcon} from './MoveIcon';

storiesOf(`Icons|MoveIcon`, module)
    .add(`default`, () => <MoveIcon color={color(`color`)} />);
