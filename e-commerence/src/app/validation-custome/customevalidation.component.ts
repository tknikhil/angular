import { FormControl } from "@angular/forms";

//just to check git
export class CustomeValidator{
// static required(c:FormControl): StringMap<string,boolean>{
//     return isBlank(c.value)||c.value==""?{required:true}:null;
// }
constructor(){}
 static skuValidation(control:FormControl):{[s:string]:boolean} {
   if(!control.value.match(/^123/)){
       return{InvalidSKU:true}; 
   } 
}


}