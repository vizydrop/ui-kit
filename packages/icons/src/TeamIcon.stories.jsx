import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {TeamIcon} from './TeamIcon';

storiesOf(`Icons|TeamIcon`, module)
    .add(`default`, () => <TeamIcon color={color(`color`)} />);
