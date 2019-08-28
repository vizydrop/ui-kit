import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {EditIcon} from './EditIcon';

storiesOf(`Icons|EditIcon`, module)
    .add(`default`, () => <EditIcon color={color(`color`)} />);
