import React from 'react';
import {storiesOf} from '@storybook/react';
import {color, select} from '@storybook/addon-knobs/react';

import {CaretIcon, Directions} from './CaretIcon';

storiesOf(`Icons|CaretIcon`, module)
    .add(`default`, () => <CaretIcon color={color(`color`)} direction={select(`direction`, Directions, Directions.TOP)} />);
