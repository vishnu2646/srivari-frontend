
export const convertToBoolean = (val: string | boolean): boolean => {
    if(val === 'on') {
        return true;
    } else {
        return false;
    }
}

export const validations = (val: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    return Object.values(val).every(x => x === null || x === '');
}