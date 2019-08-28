import React from 'react';
import {storiesOf} from '@storybook/react';
import {color, text} from '@storybook/addon-knobs/react';

import {ClearIcon} from './ClearIcon';

storiesOf(`Icons|ClearIcon`, module)
    .add(`default`, () => <ClearIcon color={color(`color`)} className={text(`className`)} />);
