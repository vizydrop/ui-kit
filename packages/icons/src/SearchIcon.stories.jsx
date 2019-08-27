import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {SearchIcon} from './SearchIcon';

storiesOf(`Icons|SearchIcon`, module)
    .add(`default`, () => <SearchIcon color={color(`color`)} />);
