import {LengaburuFamilyTree} from "../../src/LengaburuFamilyModel/LengaburuFamilyTree/LengaburuFamilyTree";
const path = require('path');

import { expect } from 'chai';
import 'mocha';




describe('TestingAddChildKing', () => {
    it('AddChildToKingNoSpouse', async () => {
        const filePath = path.join(__dirname, './Files/King/AddChildKingNoSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal(undefined);

    });

    it('AddChildToKingWithSpouse', async () => {
        const filePath = path.join(__dirname, './Files/King/AddChildToKingWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });

});


describe('TestingAddChildQueen', () => {

    it('AddChildToQueen', async () => {
        const filePath = path.join(__dirname, './Files/Queen/AddChildToQueenWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });


});




describe('TestingAddChildToSon', () => {

    it('AddChildToSonNoSpouse', async () => {
        const filePath = path.join(__dirname, './Files/Son/AddChildToSonNoSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal(undefined);

    });


    it('AddChildToSonWithSpouse', async () => {
        const filePath = path.join(__dirname, './Files/Son/AddChildToSonWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal(undefined);

    });


    it('AddChildToSpouseOfSon', async () => {
        const filePath = path.join(__dirname, './Files/Son/AddChildToSpouseOfSon.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal(undefined);

    });
});



describe('TestingAddChildToSon', () => {

    it('AddChildToDaughterNoSpouse', async () => {
        const filePath = path.join(__dirname, './Files/Daughter/AddChildToDaughterNoSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal(undefined);

    });


    it('AddChildToDaughterWithSpouse', async () => {
        const filePath = path.join(__dirname, './Files/Daughter/AddChildToDaughterWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal(undefined);

    });


        it('AddChildToSpouseOfDaughter', async () => {
            const filePath = path.join(__dirname, './Files/Daughter/AddChildToSpouseOfDaughter.txt');
            let  lengaburuTree = new  LengaburuFamilyTree();
            await lengaburuTree.readFamilyTreeData('', filePath);
            expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
            expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
            expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
            expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_NOT_ADDED");
            expect(lengaburuTree.familyLogs[4]).to.equal(undefined);

        });
});


describe('TestingAddChildToGrandSon', () => {

    it('AddChildToGrandSonNoSpouse', async () => {
        const filePath = path.join(__dirname, './Files/GrandSon/AddChildToGrandSonNoSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal(undefined);

    });


    it('AddChildToGrandSonWithSpouse', async () => {
        const filePath = path.join(__dirname, './Files/GrandSon/AddChildToGrandSonWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[6]).to.equal(undefined);


    });


    it('AddChildToSpouseOfGrandSon', async () => {
        const filePath = path.join(__dirname, './Files/GrandSon/AddChildToSpouseOfGrandSon.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[6]).to.equal(undefined);

    });


});




describe('TestingAddChildToGrandDaughter', () => {

    it('AddChildToGrandDaughterNoSpouse', async () => {
        const filePath = path.join(__dirname, './Files/GrandDaughter/AddChildToGrandDaughterNoSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal(undefined);

    });


    it('AddChildToGrandDaughterWithSpouse', async () => {
        const filePath = path.join(__dirname, './Files/GrandDaughter/AddChildToGrandDaughterWithSpouse.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[6]).to.equal(undefined);

    });


    it('AddChildToSpouseOfGrandDaughter', async () => {
        const filePath = path.join(__dirname, './Files/GrandDaughter/AddChildToSpouseOfGrandDaughter.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData('', filePath);
        expect(lengaburuTree.familyLogs[0]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[1]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[2]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[3]).to.equal("CHILD_ADDED");
        expect(lengaburuTree.familyLogs[4]).to.equal("SPOUSE_ADDED");
        expect(lengaburuTree.familyLogs[5]).to.equal("CHILD_NOT_ADDED");
        expect(lengaburuTree.familyLogs[6]).to.equal(undefined);

    });
});


