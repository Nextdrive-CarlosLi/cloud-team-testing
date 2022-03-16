import { Permission } from "./types/Permission";

class ExtractedCode {
    symbol: string;
    position: number[];
    constructor(symbol: string, position: number[]) {
        this.symbol = symbol
        this.position = position
    }
}

function extractCode(code: string): ExtractedCode {
    let targetStr = code.split(' ')[1];
    let splitTargetStr = targetStr.split('-');
    let symbol = splitTargetStr.shift();
    let position: number[] = (splitTargetStr.length > 0)
        ? splitTargetStr.map(x => Number(x))
        : [];
    return new ExtractedCode(symbol, position);
}

function validateInput(code: string): boolean {
    let regex = new RegExp("^code [a-z]+$|(?<=code [a-z])(-[0-9])+$");
    return (code) ? regex.test(code) : false;
}


export function findLabel(permissions: Permission[], code: string): string {
    let _code = code.toLowerCase();
    if (validateInput(_code)) {
        let extractedCode = extractCode(_code);
        var permission = permissions.find(x => extractCode(x.code.toLowerCase()).symbol == extractedCode.symbol);
        extractedCode.position.every(function(index) {
            if (index > permission.children.length) { 
                permission = null
                return false; 
            } 
            permission = permission.children[index - 1]
            return true
        });     
        return (permission) ? permission.label : null
    } else {
        throw new Error("invalid code.");
    }
}
