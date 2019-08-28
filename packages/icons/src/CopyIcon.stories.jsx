import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {CopyIcon} from './CopyIcon';

storiesOf(`Icons|CopyIcon`, module)
    .add(`default`, () => <CopyIcon color={color(`color`)} />);
