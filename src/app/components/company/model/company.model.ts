import { CompanySize } from "./company-size.model"

export interface Company {
    id?:number
    name:string
    size: CompanySize
}