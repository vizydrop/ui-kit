import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {BooleanIcon} from './BooleanIcon';

storiesOf(`Icons|BooleanIcon`, module)
    .add(`default`, () => <BooleanIcon color={color(`color`)} />);
