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
    bodyStyle?: string,
    transmission?: string,
    drive?: string,
    seats?: number,
    doors?: number,
    mpg?: {
        city?: number,
        hwy?: number,
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

