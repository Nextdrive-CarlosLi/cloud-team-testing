import { Permission } from "../src/types/Permission";

export const mockPermissions: Permission[] = [
    {
        label: "label A",
        code: "code A",
        children: [],
    },
    {
        label: "label B",
        code: "code B",
        children: [
            {
                label: "label B-1",
                code: "code B-1",
                children: [
                    {
                        label: "label B-1-1",
                        code: "code B-1-1",
                        children: [],
                    },
                ],
            },
            {
                label: "label B-2",
                code: "code B-2",
                children: [],
            },
        ],
    },
    {
        label: "label C",
        code: "code C",
        children: [
            {
                label: "label C-1",
                code: "code C-1",
                children: [],
            },
        ],
    },
];
