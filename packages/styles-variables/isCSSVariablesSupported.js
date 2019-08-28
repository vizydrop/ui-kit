export function isCSSVariablesSupported() {
    if (typeof window === `undefined`) {
        return true;
    }

    return window.CSS && window.CSS.supports && window.CSS.supports(`color`, `var(--fake-var)`);
}
