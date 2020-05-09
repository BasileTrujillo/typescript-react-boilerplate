import deepmerge from 'deepmerge';
import {config as appConfig} from './app';
import {config as devConfig} from './dev';
import {config as prodConfig} from './prod';

type AppConfigType = typeof appConfig;
const configs: any[] = [appConfig];

if (process.env.NODE_ENV === 'production') {
  configs.push(prodConfig);
} else {
  configs.push(devConfig);
}

export default deepmerge.all(configs) as AppConfigType;
