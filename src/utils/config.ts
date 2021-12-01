import { workspace } from 'vscode';
import { IConfig } from './interface';

const configuration = workspace.getConfiguration();

const config: IConfig = {
  configPath: configuration.get('react-intl-umi.configPath', 'src/locales')
};

export default config;