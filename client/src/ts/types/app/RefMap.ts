// type RefMap = Record<string, React.LegacyRef<HTMLDivElement>>
export type RefMap<T = HTMLDivElement> = Record<string, React.MutableRefObject<T>>
