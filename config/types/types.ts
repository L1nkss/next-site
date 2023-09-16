import { MODE } from "./constants";

type WebpackPaths = 'entry' | 'htmlPlugin' | 'output';
export type Paths = Record<WebpackPaths, string>;

export interface ENVS {
    port?: number,
    mode?: MODE
}