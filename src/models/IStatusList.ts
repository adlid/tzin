
export interface IStatusList {
    ID: number | null,
    ENTITY_ID: string | null,
    STATUS_ID: string | null,
    NAME: string | null,
    NAME_INIT: string | null,
    SORT: string | null,
    SYSTEM: string | null
    COLOR: string | null
    SEMANTICS: string | null
    CATEGORY_ID: 0
    EXTRA: {
        SEMANTICS: string | null
        COLOR: string | null
    }
}
