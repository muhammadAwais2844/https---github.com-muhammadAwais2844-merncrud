
import { ADD_TO_CART } from "./constants";


const initialState=[];

const cartAdd=(state=initialState, action)=>{

switch (action.type) {
    case ADD_TO_CART:
        
        
        return  [action.data, ...state ] 
        
   

    default:
        return state;
}


}


export default cartAdd