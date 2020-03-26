import { createInterface } from "readline";
import { TextUiHelper } from "./TextUiHelper";
import { FileHelper } from "../file/FileHelper";

const COLLECT_SENTENCE = 1;
const DELETE_ALL_SENTENCES = 2;
const EXIT = 0;

export const runTextUi = (): void => {

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const exitKeyTool = (): void => {
        TextUiHelper.clearScreen();
        console.info( "\n👋  Bye, Bye and take care!");
        readline.close();
    }
    
    
    const collectSentence = ( callback: (() => void) ): void => {
        TextUiHelper.clearScreen();
        readline.question( "Enter your sentence: ", ( input: string) => {
            const storedFile = TextUiHelper.collectSentence( input );
            console.error( `Sentence stored in: ${storedFile}`);
            TextUiHelper.pressAnyKeyToContinue( readline, callback );
        });
    }

    const deleteSentences = ( callback: (() => void) ): void => {
        TextUiHelper.clearScreen();
        FileHelper.deleteAllSentences();
        console.info( "🗑  All sentences deleted!");
        TextUiHelper.pressAnyKeyToContinue( readline, callback );
    }
    
    const showMainMenu = (): void => {
        TextUiHelper.clearScreen();
        TextUiHelper.headerLine();
        TextUiHelper.showSentences();
        console.info( 'Y O U R   O P T I O N S :' )
        console.info( '(1) Add a senctence.' );
        console.info( '(2) Delete all senctences.' );
        console.info( '(0) Exit.\n' );
        readline.question( "Please choose an option (1,2 or 0)...", (input) => {
            const option = Number(input);
            switch (option) {
                case COLLECT_SENTENCE: {
                    collectSentence( showMainMenu );
                    break;
                }
                case DELETE_ALL_SENTENCES: {
                    deleteSentences( showMainMenu );
                    break;
                }
                case EXIT: {
                    exitKeyTool();
                    break;
                }
                default:{
                    console.error( '\nPlease choose a valid option...\n' );
                    showMainMenu();
                    break;
                }
            }
        });
    }

    showMainMenu();
}