import { Permission } from "./types/Permission";

/**
 * Using recursive function to solve this problem
 * If we split the code string with "-", we could find the rule
 * ex. The code string of the first layer of the object in the array: code B,
 * and the code string of the second layer of the object: code B-1
 * Therefore, we could compare the similarity of input code
 * with the code of each array element in children layer while we traverse the object
 * Step 1: Get the array length after we split the code string of the current array element with "-"
 * ex. the length of code B = 1, the length of code B-1= 2, and name it as "partNumbers"
 * Step 2: Split the input code string with "-", and name it as "keyMatch"
 * Step 3: we could find corresponding element in keyMatch with the partNumbers
 * Step 4: Loop the permissions data and compare the keyMatch with the
 * last element of array which is created by splitting the code string in the current element of permissions data
 * Step 5: Once fulfilling the first condition (values are equal), we can compare the code of current element
 * with the input code. We can return the label name of the current element if the comparison result is true.
 * If it is false, we call the findLabel function again and traverse the children element until we find
 * the exactly matched label name or return null when there is an empty array in children  
 * @Candidate Mark (Hung-Yi) Chang
 */
// Wrap the function into the wrapping object for recursive function testing 
const findLabelObject = {
    findLabel(permissions: Permission[], code: string): string {
        const partNumbers: number = permissions[0].code.split('-').length;
        const keyMatch: string = code.split('-')[partNumbers - 1];
        for (let i: number = 0; i < permissions.length; i += 1) {
            if (permissions[i].code.split('-')[partNumbers - 1] === keyMatch) {
                if (permissions[i].code === code) {
                    return permissions[i].label;
                } else {
                    if (permissions[i].children.length > 0) {
                        return this.findLabel(permissions[i].children, code);
                    } else {
                        return null;
                    }
                }
            }
        }
    }
}

export default findLabelObject;