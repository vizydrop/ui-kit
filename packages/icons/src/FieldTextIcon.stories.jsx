import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FieldTextIcon} from './FieldTextIcon';

storiesOf(`Icons|FieldTextIcon`, module)
    .add(`default`, () => <FieldTextIcon color={color(`color`)} />);
