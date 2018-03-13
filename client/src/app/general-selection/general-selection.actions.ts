import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from "../core/store";
import { PhysicalLocation } from "../core/models/physical-location";

export const UPDATE_MILESDRIVEN = 'general/UPDATE_MILESDRIVEN',
    UPDATE_PERCENTHIGHWAY = 'general/UPDATE_PERCENTHIGHWAY',
    UPDATE_LOCATION = 'general/UPDATE_LOCATION';

@Injectable()
export class GeneralSelectionActions {
    constructor(private ngRedux: NgRedux<IAppState>) { }

    updateMilesDriven(miles) {
        if (miles && miles > 0) {
            this.ngRedux.dispatch({
                type: UPDATE_MILESDRIVEN,
                miles
            });
        }
    }

    updatePercentHighway(percentHighway) {
        if (percentHighway && percentHighway > 0) {
            this.ngRedux.dispatch({
                type: UPDATE_PERCENTHIGHWAY,
                percentHighway
            });
        }
    }

    updateLocation(location: PhysicalLocation) {
        if (location) {
            this.ngRedux.dispatch({
                type: UPDATE_LOCATION,
                location
            })
        }
    }
}