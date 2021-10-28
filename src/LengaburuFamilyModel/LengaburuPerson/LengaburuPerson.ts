import * as CONSTANTS from "../../Constants/Constants";

export class LengaburuPerson {
    id: number = 0;
    name: string = "";
    sex: CONSTANTS.LengaburuSex;
    mother: LengaburuPerson | null = null;
    spouse: LengaburuPerson | null = null;
    previousSpouse: LengaburuPerson | null = null;
    children: LengaburuPerson[] | null = null;


    constructor(name: string, sex: CONSTANTS.LengaburuSex, id: number) {
        this.name = name;
        this.sex = sex;
        this.id = id;
    }


    addChild(name: string, id: number, sex: CONSTANTS.LengaburuSex = CONSTANTS.LengaburuSex.NotSpecified): string {
        let returnErrorMessage = CONSTANTS.LengaburuChildAddedFailure;
        let spouse = (this.spouse ? this.spouse : this.previousSpouse);

        if (this.sex == CONSTANTS.LengaburuSex.Female && spouse) {
            if (this.children == null) {
                this.children = [];
            }
            let child = new LengaburuPerson(name, sex, id);
            child.mother = this;
            this.children.push(child);
            returnErrorMessage = CONSTANTS.LengaburuChildAddedSucess;
        }
        return returnErrorMessage;
    }

    addSpouse(name: string, id: number): string {
        let returnErrorMessage = CONSTANTS.SpouseAddedFailure;
        let newSpouseSex = (this.sex == CONSTANTS.LengaburuSex.Female ? CONSTANTS.LengaburuSex.Male : CONSTANTS.LengaburuSex.Female);
        if (this.spouse == null) {
            let spouse = new LengaburuPerson(name, newSpouseSex, id);
            this.spouse = spouse;
            spouse.previousSpouse = this;
            returnErrorMessage = CONSTANTS.SpouseAddedSucess;
        }
        return returnErrorMessage;
    }
}


