export interface Vehicle {
    id?: number,
    year?: number
    make?: string,
    model?: string,
    mpg?: number,
    condition?: {
        milage?: number,
        condition?: string
    }
}
