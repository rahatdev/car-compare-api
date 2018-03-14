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
    trim? : string,
    mpg?: number,
    condition?: {
        milage?: number,
        condition?: string
    }
}

