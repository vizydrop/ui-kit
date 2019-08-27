import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {CalculationIcon} from './CalculationIcon';

storiesOf(`Icons|CalculationIcon`, module)
    .add(`default`, () => <CalculationIcon color={color(`color`)} />);
