import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {DeleteIcon} from './DeleteIcon';

storiesOf(`Icons|DeleteIcon`, module)
    .add(`default`, () => <DeleteIcon color={color(`color`)} />);
