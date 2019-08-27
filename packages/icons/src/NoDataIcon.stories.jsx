import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {NoDataIcon} from './NoDataIcon';

storiesOf(`Icons|NoDataIcon`, module)
    .add(`default`, () => <NoDataIcon color={color(`color`)} />);
