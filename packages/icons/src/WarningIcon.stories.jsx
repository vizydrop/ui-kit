import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {WarningIcon} from './WarningIcon';

storiesOf(`Icons|WarningIcon`, module)
    .add(`default`, () => <WarningIcon color={color(`color`)} />);
