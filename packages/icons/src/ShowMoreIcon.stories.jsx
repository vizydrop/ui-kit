import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ShowMoreIcon} from './ShowMoreIcon';

storiesOf(`Icons|ShowMoreIcon`, module)
    .add(`default`, () => <ShowMoreIcon color={color(`color`)} />);
