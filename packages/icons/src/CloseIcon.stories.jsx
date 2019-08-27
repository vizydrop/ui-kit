import React from 'react';
import {storiesOf} from '@storybook/react';
import {color, text} from '@storybook/addon-knobs/react';

import {CloseIcon} from './CloseIcon';

storiesOf(`Icons|CloseIcon`, module)
    .add(`default`, () => <CloseIcon color={color(`color`)} className={text(`className`)} />);
