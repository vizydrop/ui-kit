import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FieldDateIcon} from './FieldDateIcon';

storiesOf(`Icons|FieldDateIcon`, module)
    .add(`default`, () => <FieldDateIcon color={color(`color`)} />);
