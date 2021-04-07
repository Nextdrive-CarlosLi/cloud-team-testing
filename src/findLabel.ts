import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    
    // 1.new codeArray = split code for "-"
    // 2.check codeArray length for forloop
    // 3.if forloop i == codeArray.length get permissions label, if get true return label, else alert None
    // 4.if forloop i < codeArray.length get permissions child, if get true permissions = permissions child, else alert None
    
    console.log("code = " +code);
    let codeArray = code.split("-");
    let codeTmp : String = "";

    for(let i = 0; i < codeArray.length; i++){
        if(i == codeArray.length-1){

            var filterPermissions = permissions.filter(function(item, index, array){
                return item.code == code;
            });

            if(filterPermissions.length == 0){
                console.log("Code : "+code+" is Not Found!!");
                return "Code : "+code+" is Not Found!!";
            }else if (filterPermissions.length > 1){
                console.log("Code : "+code+" Too Many Object!!");
                return "Code : "+code+" Too Many Object!!";
            }

            console.log("Final Answer:"+filterPermissions[0].label);
            return filterPermissions[0].label;

        }else{
            if(codeTmp != ""){
                codeTmp = codeTmp + "-" + codeArray[i];                
            }else{
                codeTmp = codeArray[i];  
            }

            var filterPermissions = permissions.filter(function(item, index, array){
                return item.code == codeTmp;
            });

            if(filterPermissions.length == 0){
                console.log("CodeTmp : "+codeTmp+" is Not Found!!");
                return "Code : "+codeTmp+" is Not Found!!";
            }else if (filterPermissions.length > 1){
                console.log("CodeTmp : "+codeTmp+" Too Many Object!!");
                return "Code : "+codeTmp+" Too Many Object!!";
            }

            console.log("CodeTmp : "+filterPermissions[0].label);
            permissions = filterPermissions[0].children;
        }
    }

    
    //return "label B-1-1"; // TODO
}
