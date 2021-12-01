import { Hover, HoverProvider, Position, TextDocument } from "vscode";
import { getRangeText, getTips, localsData } from "../utils";
import config from "../utils/config";

export default class implements HoverProvider {
  provideHover(document: TextDocument, position: Position) {
    const { character } = position;

    // 获取当前行内容
    let lineWord = document.lineAt(position).text;
    const getText: any = getRangeText(lineWord, character, config.regExp);
    if (!getText) {return;};
    const { value } = getText;
    const tips = getTips(value, localsData);
    if(tips){
      return new Hover(tips); 
    }
  }
}