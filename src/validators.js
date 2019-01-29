/* Contains a value */
export const required = value => (value ? undefined : 'Required');

/* The value is non-empty */
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

/* trims the whitespaces on values */
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

/* inner/outer fn that compares the length of value  */
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

/* validates if values are the same  */
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';
