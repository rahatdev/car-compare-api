import { IAppState } from '.';
import { UPDATE_LOCATION, UPDATE_MILESDRIVEN, UPDATE_PERCENTHIGHWAY } from '../../general-selection/general-selection.actions';

const initialState: IAppState = {}

function updateLocation(state: IAppState, action): IAppState {
    return Object.assign({}, state, {
        location: action.location
    });
}

function updateMilesDriven(state: IAppState, action): IAppState {
    return Object.assign({}, state, {
        milesDriven: action.miles
    });
}

function updatePercentHighway(state: IAppState, action): IAppState {
    return Object.assign({}, state, {
        percentHighway: action.percentHighway
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOCATION:
            return updateLocation(state, action);
        case UPDATE_MILESDRIVEN:
            return updateMilesDriven(state, action);
        case UPDATE_PERCENTHIGHWAY:
            return updatePercentHighway(state, action);
        default:
            return state;
    }
}