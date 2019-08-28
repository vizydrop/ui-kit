import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {AskIcon} from './AskIcon';

storiesOf(`Icons|AskIcon`, module)
    .add(`default`, () => <AskIcon color={color(`color`)} />);
