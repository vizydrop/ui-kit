/**
 * @jest-environment node
 */
import {isCSSVariablesSupported} from '../isCSSVariablesSupported';

describe(`is css variables supported in node env`, () => {
    it(`should always return true`, () => {
        expect(isCSSVariablesSupported()).toBe(true);
    });
});
