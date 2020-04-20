export interface Permission {
    code: string;
    label: string;
    children: Permission[];
}
