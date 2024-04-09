import { numberAttribute } from "@angular/core"

export class StudentApplication {
    name: string;
    age!: number;
    gender: string;
    passedOut!: number;
    remoteMode: boolean;
    hybridMode: boolean;
    experience!: number;
    commpanyName: string;

    constructor() {
        this.name = "";
        this.gender = "";
        this.remoteMode = false;
        this.hybridMode = false;
        this.commpanyName = "";
    }
}
