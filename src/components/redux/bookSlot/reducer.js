
const initialState = {
    totalNumOfSlots : {
        car:20,
        bike:20
    },
    availableSlots:{
        car:20,
        bike:20

    },
    userDetails:[]
   
}

const bookingReducer = (state = initialState,action) => {

    console.log(action);
    console.log('car',state.availableSlots.car);
    console.log('bike',state.availableSlots.bike);
    
    switch(action.type){
        case 'BOOK_SLOT' : 
            
            if(state.availableSlots[action.payload.vehicle] !== 0) {
               
                const vehicleType = action.payload.vehicle 
                return{
                    ...state,
                    availableSlots : {...state.availableSlots,[vehicleType] :state.availableSlots[vehicleType] -1},
                    userDetails : {...state.userDetails,userDetails :action.payload}
                    
                }
            }
            
            break;

            case 'RESET_SLOTS':
                return{
                    availableSlots : {availableSlots:state.totalNumOfSlots}
                } 
        default : return state
    }
    
}

export default bookingReducer