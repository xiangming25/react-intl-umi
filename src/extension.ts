import * as vscode from 'vscode';
import DefinitionProvider from './provider/DefinitionProvider';
import HoverProvider from './provider/HoverProvider';
import { checkHasLocales } from './utils';
import config from './utils/config';

let registerHoverProvider: vscode.Disposable | undefined;
let registerDefinitionProvider: vscode.Disposable | undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate() {
	let result;
	try {
		result = await checkHasLocales();
	} catch (error) {}
	// 如果没有查询到国际化配置语言，不进行后面的注册事件
	if (!result) {
		return;
	}

	// 注册Hover后的提示事件
	registerHoverProvider = vscode.languages.registerHoverProvider(
		['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
		new HoverProvider()
	);

	// 判断是否需要监听国际化配置文件变化
	if (config.watchMode) {
		const fileSystemWatcher = vscode.workspace.createFileSystemWatcher(`**/${config.configPath}/**/*${config.suffix}`);
		fileSystemWatcher.onDidChange(async () => {
			await checkHasLocales();
		});
	}

	registerDefinitionProvider = vscode.languages.registerDefinitionProvider(
		['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
		new DefinitionProvider());
}

// 退出 vscode 时，关闭监听
export function deactivate() {
	registerHoverProvider?.dispose();
	registerDefinitionProvider?.dispose();
}
