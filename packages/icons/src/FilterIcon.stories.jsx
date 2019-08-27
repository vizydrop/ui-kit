import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FilterIcon} from './FilterIcon';

storiesOf(`Icons|FilterIcon`, module)
    .add(`default`, () => <FilterIcon color={color(`color`)} />);
