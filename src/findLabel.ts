import { Permission } from "./types/Permission";
import {mockPermissions} from "../dummies/mockPermissions";
const ERROR_INPUT = 'ERROR INPUT';

const checkPermission =({codeSplitList,layerList}:{codeSplitList:string[],layerList:string[]})=> {
    let target = 0;
    let targetLabel = '';
    let nextLabelList = [];
    let targetText = `${codeSplitList[0]} ${[layerList[0]]}`;
    while (target < layerList.length) {
        if (target === 0) {
            const codeValue = mockPermissions.find((item) => item.code === targetText);
            if (!codeValue) {
                return ERROR_INPUT;
            }
            targetLabel = codeValue.label;
            nextLabelList = codeValue.children;
        } else {
            if (nextLabelList?.length === 0) {
                targetLabel = ERROR_INPUT;
                break;
            }
            targetText += `-${layerList[target]}`;
            const codeValue = nextLabelList.find((item) => item.code === targetText) || {};

            targetLabel = codeValue.label;
            nextLabelList = codeValue.children;
        }
        target++;
    }
    return targetLabel
}
export function findLabel(permissions: Permission[], code: string): string {
    if(!code){
        return ERROR_INPUT;
    }else{
        const codeSplitList = code.split(' ');
        if(codeSplitList.length < 2){
            return ERROR_INPUT;
        }
        const layerList = codeSplitList[1].split('-');
        const targetLabel = checkPermission({codeSplitList,layerList})

        return targetLabel
    }

}


