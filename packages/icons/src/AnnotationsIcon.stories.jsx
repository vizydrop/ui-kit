import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {AnnotationsIcon} from './AnnotationsIcon';

storiesOf(`Icons|AnnotationsIcon`, module)
    .add(`default`, () => <AnnotationsIcon color={color(`color`)} />);
