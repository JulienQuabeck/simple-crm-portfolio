export class User{

    id:string; //test
    firstName: string;
    lastName: string;
    mail:string;
    birthDate: Date;
    street: string;
    zipCode: number;
    city: string

    

    constructor(obj?:any){
        this.id = obj ? obj.id: "";
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj? obj.lastName: '';
        this.mail = obj? obj.mail: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
    }

    // toJSON(): any {
    //   throw new Error('Method not implemented.');
    // }
}