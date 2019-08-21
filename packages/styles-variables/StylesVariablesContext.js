import React from 'react';
import {calculateVariables} from './calculateVariables';

const StylesVariablesContext = React.createContext(calculateVariables({}));

export default StylesVariablesContext;
