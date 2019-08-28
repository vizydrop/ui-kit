import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FormatIcon} from './FormatIcon';

storiesOf(`Icons|FormatIcon`, module)
    .add(`default`, () => <FormatIcon color={color(`color`)} />);
