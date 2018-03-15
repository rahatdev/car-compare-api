export interface Vehicle {
    id?: number,
    year?: number
    make?: {
        makeid?: string,
        makeName?: string,
        makeIsCommon?: boolean,
        makeCountry?: string
    }
    model?: string,
    trim?: string,
    mpg?: {
        city?: number,
        hgwy?: number,
        mixed?: number
    },
    physical?: {
        width?: number,
        length?: number,
        height?: number,
        weight?: number
    },
   engine?: {
       position?: string,
       type?: string,
       cylinders?: string,
       valvesPerCylinder?: string,
       horsePower?: number,
       torque?: number,
       fuel?: string
   },
    condition?: {
        milage?: number,
        condition?: string
    },
    soldInUS?: boolean
}

