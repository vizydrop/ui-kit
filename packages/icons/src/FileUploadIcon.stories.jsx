import React from 'react';
import {storiesOf} from '@storybook/react';
import {color} from '@storybook/addon-knobs/react';

import {FileUploadIcon} from './FileUploadIcon';

storiesOf(`Icons|FileUploadIcon`, module)
    .add(`default`, () => <FileUploadIcon color={color(`color`)} />);
