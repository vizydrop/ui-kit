import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {ReloadIcon} from './ReloadIcon';

storiesOf(`Icons|ReloadIcon`, module)
    .add(`default`, () => <ReloadIcon color={color(`color`)} />);
