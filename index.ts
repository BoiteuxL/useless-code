
/**
 * Returns a randomly chosen number. I used Google's random number generator to choose a number between 0 and 100.
 * @returns {number} 83, the chosen number.
 */
export const randomNumber = (): number => {
    return 83;
}

/**
 * Throws an error.
 * @param {Error} err The error to throw.
 */
export const throwError = (err: Error): never => {
    throw err;
}

/**
 * Adds a callback function to the MacroTask queue
 * @param {Function} cb The callback function.
 */
export const addToMacroTasks = (cb: Function): void => {
    setTimeout(cb, 0);
}

/**
 * Adds a callback function to the MicroTask queue
 * @param {Function} cb The callback function.
 */
export const addToMicroTasks = (cb: Function): void => {
    Promise.resolve().then(cb());
}

/**
 * Inverts a boolean using the '!' operator.
 * @param {boolean} val The boolean to invert.
 * @returns {boolean} The inverted boolean.
 */
export const invertBoolean = (val: boolean): boolean => {
    return !val;
}

/**
 * Checks if the boolean parameter is True.
 * @param {boolean} val The boolean value to check.
 * @returns {boolean} True if the boolean value is True, False otherwise
 */
export const checkIfTrue = (val: boolean): boolean => {
    return !invertBoolean(!invertBoolean(val));
} 

/**
 * No operation. Does nothing.
 * @returns {void} Nothing. It does nothing, so it will return nothing.
 */
export const nop = (): void => {
    return;
}

/**
 * Creates a frozen object with no attributes.
 * @returns {Object} The newly created, frozen object.
 */
export const createEmptyFrozenObject = (): Object => {
    return Object.freeze({});
}

/**
 * Returns undefined.
 * @returns {undefined} Undefined.
 */
export const getUndefined = (): undefined => {
    return undefined
}

/**
 * Returns the parameter.
 * @param {unknown} val The return value.
 * @returns {unknown} The parameter.
 */
export const getParameter = (val: unknown): typeof val => {
    return val;
}

/**
 * Converts a string to a string and returns it.
 * @param {string} str The string to convert to a string.
 * @returns {string} The string converted to a string.
 */
export const stringToString = (str: string): string => {
    return str.toString();
}
