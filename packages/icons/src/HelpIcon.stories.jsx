import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {HelpIcon} from './HelpIcon';

storiesOf(`Icons|HelpIcon`, module)
    .add(`default`, () => <HelpIcon color={color(`color`)} />);
