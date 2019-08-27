
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withKnobs, color, text } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered/react';
import StylesVariablesProvider from '@vizydrop/styles-variables/StylesVariablesProvider';
import {
    defaultColorContent, defaultColorContentInvert, defaultColorBody,
    defaultColorHighlight, defaultColorMain, defaultColorError, defaultFontFamily
} from '@vizydrop/styles-variables/calculateVariables';

const req = requireContext('../packages', true, /\.stories\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
    <StylesVariablesProvider theme={{
        colors: {
            colorContent: color(`colorContent`, defaultColorContent, `theme`),
            colorContentInvert: color(`colorContentInvert`, defaultColorContentInvert, `theme`),
            colorBody: color(`colorBody`, defaultColorBody, `theme`),
            colorHighlight: color(`colorHighlight`, defaultColorHighlight, `theme`),
            colorMain: color(`colorMain`, defaultColorMain, `theme`),
            colorError: color(`colorError`, defaultColorError, `theme`),
        },
        fontFamily: text(`fontFamily`, defaultFontFamily, `theme`),
    }}>
        {story()}
    </StylesVariablesProvider>
));
addDecorator(centered);
addDecorator(withKnobs);
configure(loadStories, module);