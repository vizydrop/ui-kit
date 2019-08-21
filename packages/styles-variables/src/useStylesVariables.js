import {useContext} from 'react';
import StylesVariablesContext from './StylesVariablesContext';

export default function useStylesVariables() {
    return useContext(StylesVariablesContext);
}
