import React from 'react';
import {storiesOf} from '@storybook/react';
import {color, select} from '@storybook/addon-knobs/react';

import {SortIcon, Directions} from './SortIcon';

storiesOf(`Icons|SortIcon`, module)
    .add(`default`, () => <SortIcon color={color(`color`)} direction={select(`direction`, Directions, Directions.ASCENDING)} />);
