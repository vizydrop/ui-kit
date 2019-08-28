import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FieldIdIcon} from './FieldIdIcon';

storiesOf(`Icons|FieldIdIcon`, module)
    .add(`default`, () => <FieldIdIcon color={color(`color`)} />);
