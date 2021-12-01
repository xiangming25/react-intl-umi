import * as vscode from 'vscode';
import { checkHasLocales } from './utils';

let registerHoverProvider: vscode.Disposable | undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('react-intl-umi.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from react-intl-umi!');
	});

	context.subscriptions.push(disposable);
	if (checkHasLocales()) {
		// console.log('log:--------11-----: ', );
	}
}

export function deactivate() {}
