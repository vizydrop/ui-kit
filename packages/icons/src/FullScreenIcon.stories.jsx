import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FullScreenIcon} from './FullScreenIcon';

storiesOf(`Icons|FullScreenIcon`, module)
    .add(`default`, () => <FullScreenIcon color={color(`color`)} />);
