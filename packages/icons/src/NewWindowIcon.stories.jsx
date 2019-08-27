import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {NewWindowIcon} from './NewWindowIcon';

storiesOf(`Icons|NewWindowIcon`, module)
    .add(`default`, () => <NewWindowIcon color={color(`color`)} />);
