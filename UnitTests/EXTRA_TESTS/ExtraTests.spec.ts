import {LengaburuFamilyTree} from "../../src/LengaburuFamilyModel/LengaburuFamilyTree/LengaburuFamilyTree";
const path = require('path');

import { expect } from 'chai';
import 'mocha';


describe('ExtraTest', () => {


    it('PaternalUncle', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/PaternalUncle.txt');
        let lengaburuTree = new LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[1]).to.equal("Albus");
    });


    it('TestFamilyBuild', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/PaternalUncle.txt');
        let lengaburuTree = new LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', buildFilePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[6]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[7]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[8]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[9]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[10]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[11]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[12]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[13]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[14]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[15]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[16]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[17]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[18]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[19]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[20]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[21]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[22]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[23]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[24]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[25]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[26]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[27]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[28]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[29]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[30]).to.equal(undefined);
    });




        it('TestSpecialCaseInLaws', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/InLaws.txt');
        let lengaburuTree = new LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
            expect(lengaburuTree.familyLogs[0]).to.equal("Charlie Percy Ronald");
            expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
            expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
            expect(lengaburuTree.familyLogs[3]).to.equal("Malfoy Bob");
            expect(lengaburuTree.familyLogs[4]).to.equal("CHILD_ADDED");
            expect(lengaburuTree.familyLogs[5]).to.equal("Lily Aurora");
            expect(lengaburuTree.familyLogs[6]).to.equal("Audrey Helen");
            expect(lengaburuTree.familyLogs[7]).to.equal(undefined);
    });



    it('TestErrors', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/Errors.txt');
        let lengaburuTree = new LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[7]).to.equal(undefined);
    });

});
