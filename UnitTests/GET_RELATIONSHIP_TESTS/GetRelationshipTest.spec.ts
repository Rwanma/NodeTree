import {LengaburuFamilyTree} from "../../src/LengaburuFamilyModel/LengaburuFamilyTree/LengaburuFamilyTree";
const path = require('path');

import { expect } from 'chai';
import 'mocha';



describe('GetRelationshipTest', () => {

    it('PaternalUncle', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        console.log(buildFilePath);
        const relationshipPath = path.join(__dirname, './Files/PaternalUncle.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[1]).to.equal("Albus");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });

    it('MaternalUncle', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/MaternalUncle.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Hugo");
        expect(lengaburuTree.familyLogs[1]).to.equal("Bill Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });

    it('PaternalAunt', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/PaternalAunt.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Lily");
        expect(lengaburuTree.familyLogs[1]).to.equal("Ginerva");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);


    });

    it('MaternalAunt', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/MaternalAunt.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Dominique");
        expect(lengaburuTree.familyLogs[1]).to.equal("Ginerva");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);
    });



   it('BrotherInLaw', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/BrotherInLaw.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[1]).to.equal("Malfoy");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

   });

    it('SisterInLaw', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/SisterInLaw.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Lily");
        expect(lengaburuTree.familyLogs[1]).to.equal("Audrey Helen");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });




    it('Son', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/Son.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Bill Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[1]).to.equal("Bill Charlie Percy Ronald");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });




    it('Daughter', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/Daughter.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Victoire Dominique");
        expect(lengaburuTree.familyLogs[1]).to.equal("Molly Lucy");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });


    it('Siblings', async () => {
        const buildFilePath = path.join(__dirname, './Files/FamilyBuild/FamilyBuild.txt');
        const relationshipPath = path.join(__dirname, './Files/Siblings.txt');
        let  lengaburuTree = new  LengaburuFamilyTree();
        await lengaburuTree.readFamilyTreeData(buildFilePath, relationshipPath);
        expect(lengaburuTree.familyLogs[0]).to.equal("Charlie Percy Ronald Ginerva");
        expect(lengaburuTree.familyLogs[1]).to.equal("Victoire Dominique");
        expect(lengaburuTree.familyLogs[2]).to.equal(undefined);

    });

});

