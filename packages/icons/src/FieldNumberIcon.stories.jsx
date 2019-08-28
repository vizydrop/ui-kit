import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FieldNumberIcon} from './FieldNumberIcon';

storiesOf(`Icons|FieldNumberIcon`, module)
    .add(`default`, () => <FieldNumberIcon color={color(`color`)} />);
