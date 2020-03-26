import fs from "fs";

const FILENAME_START = 'sentence_';
const FILENAME_END = '.txt';

export class FileHelper {
    static collectSentences(): string[] {
        const allFiles = fs.readdirSync('.');

        let sentences: string[] = [];
        allFiles.some( filename => {
            if ( filename.startsWith(FILENAME_START) &&
                filename.endsWith(FILENAME_END) ){
                    const content = fs.readFileSync(filename);
                    sentences = [...sentences, content.toString() ];
                }
        }); 
        return sentences;
    }

    static storeSentence( text: string): string {
        const timestamp = (new Date()).getTime();
        const filepath = `./${FILENAME_START}${timestamp}${FILENAME_END}`;
        fs.writeFileSync(filepath, text);
        return filepath;
    }

    static deleteAllSentences(): void {
        const allFiles = fs.readdirSync('.');
        
        allFiles.some( filename => {
            if ( filename.startsWith(FILENAME_START) &&
                filename.endsWith(FILENAME_END) ){
                    fs.unlinkSync(filename);
                }
        }); 
    }
}