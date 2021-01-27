import { createContext } from 'react';
import { GetImageUrlProps } from '../providers/ConfigProvider';
import { Config } from '../../types/config';

interface ConfigContext {
  config: Config | null;
  getImageURL: ({ filePath, mediaType, size }: GetImageUrlProps) => string;
}

const configContextDefaultValue: ConfigContext = {
  config: null,
  getImageURL: () => '',
}

const ConfigContext = createContext<ConfigContext>(configContextDefaultValue);

export default ConfigContext;
