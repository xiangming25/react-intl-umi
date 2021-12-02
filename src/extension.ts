import * as vscode from 'vscode';
import HoverProvider from './provider/HoverProvider';
import { checkHasLocales } from './utils';
import config from './utils/config';

let registerHoverProvider: vscode.Disposable | undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate() {
	const result = await checkHasLocales();
	// 如果没有查询到国际化配置语言，不进行后面的注册事件
	if (!result) {
		return;
	}
	registerHoverProvider = vscode.languages.registerHoverProvider(
		['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
		new HoverProvider()
	);
	if (config.watchMode) {
		const fileSystemWatcher = vscode.workspace.createFileSystemWatcher(`**/${config.configPath}/**/*${config.suffix}`);
		fileSystemWatcher.onDidChange(async () => {
			await checkHasLocales();
		});
	}
}

// 退出 vscode 时，关闭监听
export function deactivate() {
	registerHoverProvider?.dispose();
}
