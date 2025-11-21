/** biome-ignore-all lint/correctness/noUnusedVariables: Globally used */

type Omits<T, K extends PropertyKey> = Omit<T, K>;
type prettify<T> = { [K in keyof T]: T[K] } & {};

type ReadonlyChildren = Readonly<{ children: React.ReactNode }>;
 