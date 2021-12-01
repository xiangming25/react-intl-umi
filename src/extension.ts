import * as vscode from 'vscode';
import HoverProvider from './provider/HoverProvider';
import { checkHasLocales } from './utils';

let registerHoverProvider: vscode.Disposable | undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('react-intl-umi.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from react-intl-umi!');
	});

	context.subscriptions.push(disposable);
	const result = await checkHasLocales();
	if (!result) {
		return;
	}
	registerHoverProvider = vscode.languages.registerHoverProvider(
		['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
		new HoverProvider()
	);
}

export function deactivate() {}
