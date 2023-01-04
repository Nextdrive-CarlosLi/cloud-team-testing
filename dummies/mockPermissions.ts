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
    }
];

const emptyArray = [];

export const mockPermissions2: Permission[] = [
    {
        label: "label A",
        code: "code A",
        children: null,
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
                children: undefined,
            },
        ],
    },
    {
        label: "label T",
        code: "code T",
        children: [
            {
                label: "label T-1",
                code: "code T-1",
                children: null,
            }, 
            {
                label: "label T-2",
                code: "code T-2",
                children: undefined,
            }, 
            {
                label: "label T-3",
                code: "code T-3",
                children: [
                    {
                        label: "label T-3-1",
                        code: "code T-3-1",
                        children: null,
                    },
                    {
                        label: "label T-3-2",
                        code: "code T-3-2",
                        children: [],
                    },
                    {
                        label: "label T-3-3",
                        code: "code T-3-3",
                        children: undefined,
                    },
                    {
                        label: "label T-3-4",
                        code: "code T-3-4",
                        children: [],
                    },
                ],
            }, 
            {
                label: "label T-4",
                code: "code T-4",
                children: [],
            }, 
        ],
    },
    {
        label: "label K",
        code: "code K",
        children: [
            {
                label: "label K-1",
                code: "code K-1",
                children: null,
            }, 
        ],
    },
    {
        label: "label J",
        code: "code I",
        children: [],
    },
    {
        label: "label XLIX",
        code: "code IL",
        children: [
            {
                label: "label XLIX-1",
                code: "code IL-1",
                children: null,
            }, 
            {
                label: "label XLIX-2",
                code: "code IL-2",
                children: undefined,
            }, 
            {
                label: "label XLIX-III",
                code: "code IL-III",
                children: [
                    {
                        label: "label XLIX-III-I",
                        code: "code IL-III-I",
                        children: undefined,
                    },
                    {
                        label: "label XLIX-III-II",
                        code: "code IL-III-II",
                        children: emptyArray,
                    },
                    {
                        label: "label XLIX-III-III",
                        code: "code IL-III-III",
                        children: undefined,
                    },
                ],
            }, 
            {
                label: "label XLIX-FOUR",
                code: "code IL-FOUR",
                children: [].concat(undefined),
            }, 
            {
                label: "label XLIX-F",
                code: "code IL-F",
                children: [].concat(null),
            }, 
        ],
    },
    {
        label: "label W",
        code: "code W",
        children: [].concat(emptyArray),
    },
];