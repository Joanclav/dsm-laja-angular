interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  readonly [key: string]: string;
}
