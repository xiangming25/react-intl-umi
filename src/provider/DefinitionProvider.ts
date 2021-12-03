import { DefinitionProvider, Position, TextDocument } from "vscode";
import { getRangeText, getWordLocation, localsData } from "../utils";
import config from "../utils/config";

export default class implements DefinitionProvider {
  async provideDefinition(document: TextDocument, position: Position) {
    const { character } = position;

    // 获取当前行内容
    let lineWord = document.lineAt(position).text;

    const getRangeRe = getRangeText(lineWord, character, config.regExp);
    if (!getRangeRe) {return;};
    const { value } = getRangeRe;
    if (!localsData) {return;};
    const location = await getWordLocation(value);
    if (!location) {return;};
    return location;
  }
}