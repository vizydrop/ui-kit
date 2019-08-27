import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {GuideIcon} from './GuideIcon';

storiesOf(`Icons|GuideIcon`, module)
    .add(`default`, () => <GuideIcon color={color(`color`)} />);
