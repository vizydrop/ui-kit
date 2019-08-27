import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {DataTableIcon} from './DataTableIcon';

storiesOf(`Icons|DataTableIcon`, module)
    .add(`default`, () => <DataTableIcon color={color(`color`)} />);
