import fs from "fs";
import readline from "readline";


export class MyFileReaderWriter {

    writeFamilyLogs(familyLogs : string[], fileToWrite : string)
    {
        let file = fs.createWriteStream(fileToWrite);
        file.on('error', function(err) { /* error handling */ });

        for (let log of familyLogs) {
            file.write(log + '\n')
        }
        file.end();
    }

    async readFamilyTreeData(familyFile : string) {
        const fileStreamFamily = fs.createReadStream(familyFile);

        const rlFamily = readline.createInterface({
            input: fileStreamFamily,
            crlfDelay: Infinity
        });


        let FamillyArray = [];
        for await (const line of rlFamily) {
            const data = line.split(" ");
            FamillyArray.push(data)
        }

        return FamillyArray;
    }
}



