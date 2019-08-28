import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ExpandIcon} from './ExpandIcon';

storiesOf(`Icons|ExpandIcon`, module)
    .add(`default`, () => <ExpandIcon color={color(`color`)} />);
