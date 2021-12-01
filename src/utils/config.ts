import { workspace } from 'vscode';
import { IConfig } from './interface';

const configuration = workspace.getConfiguration();

const config: IConfig = {
  configPath: configuration.get('react-intl-umi.configPath', 'src/locales'),
  suffix: configuration.get('react-intl-umi.suffix', '.ts'),
  regExp: configuration.get('react-intl-umi.regExp', "intl.formatMessage({ id: '$1' })")
};

export default config;