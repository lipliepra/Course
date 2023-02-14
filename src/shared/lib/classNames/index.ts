type TMods = Record<string, boolean | string>;

export const classNames = (cls: string, mods?: TMods, additional?: string[]) => [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
]
    .join(' ');
