/**
  * @author Rahat Hussain
  * @desc Recursively freezes object and all child objects to enfore immutability.
  */
function deepFreeze(obj) {
    //console.log('Freezeing', obj);
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        if (obj.hasOwnProperty(prop)
            && obj[prop] !== null
            && (typeof obj[prop] === 'object')
            && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        };

        return obj;
    })
}

/**
  * @author Rahat Hussain
  * @desc Freezes state of redux store to prevent unwitting state mutations.
  */
export default function freezeState(store) {
    return next => action => {
        const result = next(action);
        const state = store.getState();
        deepFreeze(state);
        return result;
    }
}