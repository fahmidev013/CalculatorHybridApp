
export const TOGGLE_PLUS_MINUS = "TOGGLE_PLUS_MINUS";
export const CALCULATE_RESULT = "CALCULATE_RESULT";
export const SAVE_EXPRESSION = "SAVE_EXPRESSION";
export const CLEAR_RESULT = "CLEAR_RESULT";

export const togglePlusMinus = () => ({
    type: TOGGLE_PLUS_MINUS
});

export const saveExpression = payload => ({ type: SAVE_EXPRESSION, payload });
export const calcResult = () => ({ type: CALCULATE_RESULT });
export const clearResult = () => ({ type: CLEAR_RESULT });
