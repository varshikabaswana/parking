
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
                console.log("reached");
                return {
                ...state,
                availableSlots : state.availableSlots[action.payload.vehicle] -1,
                userDetails : state.userDetails.push(...state.userDetails,action.payload)
                }
            }
                //userDetails : state.userDetails.push(...state.userDetails,action.payload)
                //userDetails : state.userDetails.concat(action.payload)
            return state

        default : return state
    }
    
}

export default bookingReducer