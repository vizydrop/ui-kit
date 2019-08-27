import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {DataSourceIcon} from './DataSourceIcon';

storiesOf(`Icons|DataSourceIcon`, module)
    .add(`default`, () => <DataSourceIcon color={color(`color`)} />);
