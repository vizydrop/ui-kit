import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, color} from '@storybook/addon-knobs/react';

import {AddIcon} from './AddIcon';

storiesOf(`Icons|AddIcon`, module)
    .add(`default`, () => <AddIcon color={color(`color`)} className={text(`className`)} />);
