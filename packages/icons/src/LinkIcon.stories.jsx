import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {LinkIcon} from './LinkIcon';

storiesOf(`Icons|LinkIcon`, module)
    .add(`default`, () => <LinkIcon color={color(`color`)} />);
