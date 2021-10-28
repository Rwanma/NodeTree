import {LengaburuFamilyTree} from "./LengaburuFamilyModel/LengaburuFamilyTree/LengaburuFamilyTree";
import * as CONSTANTS from "./Constants/Constants";



let fileToProcess = process.argv[2];
const familyPath = CONSTANTS.ORIGINAL_FAMILY_TREE_FILE;

let  lengaburuTree = new  LengaburuFamilyTree();

lengaburuTree.readFamilyTreeData(familyPath, fileToProcess).then(result => console.log("THANK YOU FOR TESTING THIS APPLICATION SHIPPIT!"));
