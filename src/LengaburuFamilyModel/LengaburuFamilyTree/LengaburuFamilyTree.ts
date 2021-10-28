import {LengaburuPerson} from "../LengaburuPerson/LengaburuPerson";
import * as CONSTANTS from "../../Constants/Constants";
import {MyFileReaderWriter} from "../../FileReaderWriter/MyFileReaderWriter";


export class LengaburuFamilyTree {
    KingArthur: LengaburuPerson | null = null; // initial family member
    id: number = 1;
    fileReaderWriter: MyFileReaderWriter = new MyFileReaderWriter();
    familyLogs: string[] = [];

    constructor() {
        this.KingArthur = new LengaburuPerson("Arthur", this.id++, CONSTANTS.LengaburuSex.Male);
    }


    async readFamilyTreeData(familyFile: string, updateFile: string) {
        if(familyFile!=''){
            await this.fileReaderWriter.readFamilyTreeData(familyFile).then(familyData => this.processFamilyData(familyData))
            await this.fileReaderWriter.writeFamilyLogs(this.familyLogs, CONSTANTS.ORIGINAL_FAMILY_TREE_RESULT);
            this.familyLogs = [];
            await this.fileReaderWriter.readFamilyTreeData(updateFile).then(processingData => this.processFamilyData(processingData));
            //this.printFamilyTree(this.KingArthur, 0);
            await this.fileReaderWriter.writeFamilyLogs(this.familyLogs, CONSTANTS.resultsFile);
        }
        else {
            await this.fileReaderWriter.readFamilyTreeData(updateFile).then(processingData => this.processFamilyData(processingData));
            //this.printFamilyTree(this.KingArthur, 0);
            await this.fileReaderWriter.writeFamilyLogs(this.familyLogs, CONSTANTS.resultsFile);
        }
    }


    processFamilyData(resultsFamily: string[][]) {
        for (let oneLengaburu of resultsFamily) {

            // ADD_CHILD FUNCTIONALITY
            if (oneLengaburu[CONSTANTS.FUNCTIONALITY] == CONSTANTS.ADD_SPOUSE || oneLengaburu[CONSTANTS.FUNCTIONALITY] == CONSTANTS.ADD_CHILD) {
                this.addLengaburuRelationsip(oneLengaburu[CONSTANTS.LENGABURU_TO_FIND],
                    oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP],
                    oneLengaburu[CONSTANTS.FUNCTIONALITY],
                    this.getEnumSexFromString(oneLengaburu[CONSTANTS.SEX]));
            }

            // GET_RELATIONSHIP functionality
            else if (oneLengaburu[CONSTANTS.FUNCTIONALITY] == CONSTANTS.GET_RELATIONSHIP) {
                let relationLengaburu = this.findLengaburu(this.KingArthur, oneLengaburu[CONSTANTS.LENGABURU_TO_FIND]);
                let resultToPublish = '';
                if (relationLengaburu) {
                    // Paternal-Uncle and Paternal-Aunt
                    if (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.PATERNAL) && relationLengaburu.mother) {
                        let spouseOfMother = (relationLengaburu.mother.spouse ? relationLengaburu.mother.spouse : relationLengaburu.mother.previousSpouse);
                        if (spouseOfMother && spouseOfMother.mother && spouseOfMother.mother.children) {
                            let sex = (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.UNCLE) ? CONSTANTS.LengaburuSex.Male : CONSTANTS.LengaburuSex.Female);
                            resultToPublish = this.searchChildListBySex(spouseOfMother.mother.children, sex, spouseOfMother.id);
                        }
                    }

                    // Maternal-Uncle and Maternal-Aunt
                    else if (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.MATERNAL) && relationLengaburu.mother && relationLengaburu.mother.mother && relationLengaburu.mother.mother.children) {
                        let sex = (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.UNCLE) ? CONSTANTS.LengaburuSex.Male : CONSTANTS.LengaburuSex.Female);
                        resultToPublish = this.searchChildListBySex(relationLengaburu.mother.mother.children, sex, relationLengaburu.mother.id);
                    }

                    // Brother-In-Law and Sister-In-Law
                    else if (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.LAW)) {
                        let sexToFind = (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.BROTHER) ? CONSTANTS.LengaburuSex.Male : CONSTANTS.LengaburuSex.Female);

                        // first case BROTHER AND SISTERS OF SPOUSE
                        let spouseOfLengaburu = (relationLengaburu.spouse ? relationLengaburu.spouse : relationLengaburu.previousSpouse);
                        if (spouseOfLengaburu && spouseOfLengaburu.mother && spouseOfLengaburu.mother.children) {
                            resultToPublish = this.searchChildListBySex(spouseOfLengaburu.mother.children, sexToFind, spouseOfLengaburu.id);
                        }


                        // second case Wives and Husbands of brothers
                        let siblingsInLaw: LengaburuPerson[] = [];
                        if (relationLengaburu.mother && relationLengaburu.mother.children) {
                            relationLengaburu.mother.children.map((child) => {
                                if (relationLengaburu && child.id != relationLengaburu.id ) {
                                    let spouseOfSibling = (child.spouse ? child.spouse : child.previousSpouse);
                                    if (spouseOfSibling && spouseOfSibling.sex == sexToFind) {
                                        siblingsInLaw.push(spouseOfSibling);
                                    }
                                }
                            }); // map
                            siblingsInLaw.sort(function (foundA, foundB) {return foundA.id - foundB.id});
                            if(resultToPublish!=''){
                                resultToPublish += resultToPublish + ' ';
                            }
                            siblingsInLaw.map((sibling) => {resultToPublish += sibling.name + ' ';});
                            resultToPublish = resultToPublish.slice(0, -1);
                        }
                    }


                    // Son and Daughter
                    else if (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.SON) || oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.DAUGHTER))
                    {
                        let sexToFind = (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.SON) ? CONSTANTS.LengaburuSex.Male : CONSTANTS.LengaburuSex.Female);
                        let spouse = (relationLengaburu.spouse ? relationLengaburu.spouse : relationLengaburu.previousSpouse);
                        let children = null;
                        if (spouse && spouse.children){
                            children = spouse.children;
                        }else{
                            children = relationLengaburu.children
                        }

                        if(children){
                            resultToPublish = this.searchChildListBySex(children, sexToFind);
                        }
                    }

                    // Siblings
                    else if (oneLengaburu[CONSTANTS.NAME_OR_RELATIONSHIP].includes(CONSTANTS.SIBLINGS))
                    {
                        if(relationLengaburu.mother && relationLengaburu.mother.children){
                            resultToPublish = this.searchChildListBySex(relationLengaburu.mother.children, CONSTANTS.LengaburuSex.any, relationLengaburu.id);
                        }

                    }
                }//if (relationLengaburu)
                this.familyLogs.push((resultToPublish == ''?CONSTANTS.PersonNotFound:resultToPublish));
            }// GET_RELATIONSHIP functionality

        }

    }


    addLengaburuRelationsip(lengaburuNameToSearch: string, lengaburuNameToAdd: string, relationship: string, sex: CONSTANTS.LengaburuSex = CONSTANTS.LengaburuSex.NotSpecified) {
        let lengaburuFound = this.findLengaburu(this.KingArthur, lengaburuNameToSearch);
        if (lengaburuFound == null) {
            this.familyLogs.push(CONSTANTS.LengaburuChildAddedFailure);
        } else if (relationship == CONSTANTS.ADD_SPOUSE) {
            let addedMessage = lengaburuFound.addSpouse(lengaburuNameToAdd, this.id++);
            this.familyLogs.push(addedMessage);
        } else if (relationship == CONSTANTS.ADD_CHILD) {
            let addedMessage = lengaburuFound.addChild(lengaburuNameToAdd, this.id++, sex);
            this.familyLogs.push(addedMessage);
        } else {
            this.familyLogs.push(CONSTANTS.LengaburuChildAddedFailure);
        }
    }

    findLengaburu(lengaburuToSearch: LengaburuPerson | null, nameToFind: string): LengaburuPerson | null {
        let lengaburuFound = null;
        if (lengaburuToSearch != null) {
            // search current
            if (lengaburuToSearch.name == nameToFind) {
                lengaburuFound = lengaburuToSearch;
            }

            // search spouse. We don't want to search the spouse if we came from the spouse
            if (lengaburuFound == null && lengaburuToSearch.spouse != null && lengaburuToSearch.spouse.spouse != lengaburuToSearch) {
                lengaburuFound = this.findLengaburu(lengaburuToSearch.spouse, nameToFind);
            }

            // search children
            if (lengaburuFound == null && lengaburuToSearch.children != null) {
                for (let child of lengaburuToSearch.children) {
                    lengaburuFound = this.findLengaburu(child, nameToFind);
                    if (lengaburuFound != null) {
                        break;
                    }
                }
            }
        } // if (Lengaburu != null)
        return lengaburuFound;
    }


    printFamilyTree(lengaburuToSearch: LengaburuPerson | null, tabs: number) {
        let tabsToPrint = '';
        for (let i = 0; i < tabs; ++i) {
            tabsToPrint += '\t';
        }

        if (lengaburuToSearch != null) { // search current
            console.log(tabsToPrint + lengaburuToSearch.name + " " + lengaburuToSearch.id);
            //this.printFamilyTree(lengaburuToSearch.spouse, tabs);
            tabs++;
            if (lengaburuToSearch.children != null) {
                for (let child of lengaburuToSearch.children) {
                    this.printFamilyTree(child, tabs);
                }
            }
            this.printFamilyTree(lengaburuToSearch.spouse, tabs - 1);
        }
    }


    getEnumSexFromString(sex: string): CONSTANTS.LengaburuSex {
        let sexOfLengaburu = CONSTANTS.LengaburuSex.NotSpecified;
        if (sex == CONSTANTS.MALE) {
            sexOfLengaburu = CONSTANTS.LengaburuSex.Male;
        } else if (sex == CONSTANTS.FEMALE) {
            sexOfLengaburu = CONSTANTS.LengaburuSex.Female;
        }
        return sexOfLengaburu;
    }


    searchChildListBySex(children: LengaburuPerson[], sex: CONSTANTS.LengaburuSex, idToExclude : number = -1): string {
        let listFound = '';
        children.sort(function (foundA, foundB) {
            return foundA.id - foundB.id
        });
        children.map((foundLengaburu) => {
            if ((foundLengaburu.sex == sex || sex == CONSTANTS.LengaburuSex.any) && foundLengaburu.id != idToExclude) {
                listFound += foundLengaburu.name + " ";

            }
        });
        listFound = listFound.slice(0, -1);
        if (listFound == '') {
            listFound = CONSTANTS.PersonNotFound;
        }
        return listFound;
    }

}
