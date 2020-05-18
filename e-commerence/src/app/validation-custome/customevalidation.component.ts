import { FormControl } from "@angular/forms";

//second attempt to check git commit
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