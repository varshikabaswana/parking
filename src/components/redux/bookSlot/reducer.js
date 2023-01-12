
// const initialState = {
//     totalNumOfSlots : {
//         car:20,
//         bike:20
//     },
//     availableSlots:{
//         car:20,
//         bike:20

//     },
//     userDetails:[]
   
// }

const initialState = {
    car :{
        totalNumOfSlots : 20,
        availableSlots : 20,
        numOfSlotsBooked : 0
    },
    bike : {
        totalNumOfSlots : 20,
        availableSlots : 20,
        numOfSlotsBooked : 0
    }

}

const bookingReducer = (state = initialState,action) => {

    console.log(action);
    console.log('car',state.car.availableSlots);
    console.log('bike',state.bike.availableSlots);
    
    switch(action.type){
        case 'BOOK_SLOT' : 
            const vehicleType = action.payload.vehicle
            const vehicleData = state[vehicleType]; 
            if(state,[vehicleType].availableSlots !== 0) {
               
                return{
                    ...state,
                    [vehicleType]: {... vehicleData, numOfSlotsBooked:  vehicleData.numOfSlotsBooked + 1},
                    [vehicleType]: {... vehicleData, availableSlots:  vehicleData.availableSlots - 1},
                    //availableSlots : {...state.availableSlots,[vehicleType] :state.availableSlots[vehicleType] -1},
                    userDetails : {...state.userDetails,userDetails :action.payload}
                    
                }
            }
            
            break;

        case 'RESET_SLOTS':
                return{

                    car: state.car.totalNumOfSlots,
                    bike : state.bike.totalNumOfSlots
                    // availableSlots,[car] : state.totalNumOfSlots[car],
                    // availableSlots,[bike] : 20,
                    
                } 
            break;

        default : return state
    }
    
}

export default bookingReducer