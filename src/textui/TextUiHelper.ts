import { Interface } from "readline";
import { FileHelper } from "../file/FileHelper";

export class TextUiHelper {


    static headerLine(): void {
        console.info( `\n 📝  S E N T E N C E   C O L L E C T O R` );
        console.info( '------------------------------------------\n' );
    }

    static clearScreen(): void {
        const lines = process.stdout.getWindowSize()[1];
        for(let i = 0; i < lines; i++) {
            console.log('\r\n');
        }
    }

    static pressAnyKeyToContinue( readline: Interface, callback: () => void ): void {
        console.info( '\nPress any key to continue...' );
        process.stdin.once('data', function () {
            readline.write('', { ctrl: true, name: 'u' });
            callback();
        });
    }

    static collectSentence( text: string): string {
        const stored = FileHelper.storeSentence(text);
        return stored;
    }

    static showSentences(): void {
        let sentences = FileHelper.collectSentences();
        if ( sentences.length < 1 )
            sentences = [ '[No sentences yet!]' ];
        
        console.info( `Y O U R   S E N T E N C E S:` );
        sentences.forEach(sentence => {
            console.info( `"${sentence}"` );
        });
        console.info( '\n' );
    }
}