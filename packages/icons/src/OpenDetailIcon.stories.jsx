import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {OpenDetailIcon} from './OpenDetailIcon';

storiesOf(`Icons|OpenDetailIcon`, module)
    .add(`default`, () => <OpenDetailIcon color={color(`color`)} />);
