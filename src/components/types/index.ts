export interface TreeListType {
    name?: string,
    icon?: string,
    // children 嵌套子级
    children?: TreeListType[] | []
}