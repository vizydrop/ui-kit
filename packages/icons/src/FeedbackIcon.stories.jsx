import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FeedbackIcon} from './FeedbackIcon';

storiesOf(`Icons|FeedbackIcon`, module)
    .add(`default`, () => <FeedbackIcon color={color(`color`)} />);
