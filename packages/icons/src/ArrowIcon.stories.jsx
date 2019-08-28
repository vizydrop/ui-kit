import React from 'react';
import {storiesOf} from '@storybook/react';
import {color, select} from '@storybook/addon-knobs/react';

import {ArrowIcon, Directions} from './ArrowIcon';

storiesOf(`Icons|ArrowIcon`, module)
    .add(`default`, () => <ArrowIcon color={color(`color`)} direction={select(`direction`, Directions, Directions.TOP)} />);
