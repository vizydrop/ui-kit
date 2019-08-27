import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {CloseBigIcon} from './CloseBigIcon';

storiesOf(`Icons|CloseBigIcon`, module)
    .add(`default`, () => <CloseBigIcon color={color(`color`)} />);
