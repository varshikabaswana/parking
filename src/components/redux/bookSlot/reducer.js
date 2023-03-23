
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
   

const initialState = {

    car :{
        totalNumOfSlots : 20,
        availableSlots : 20 
    },
    bike : {
        totalNumOfSlots : 20, 
        availableSlots : 20
    },
    userDetails:[]
}

const bookingReducer = (state = initialState,action) => {

    console.log('car',state.car.availableSlots);
    console.log('bike',state.bike.availableSlots);
    
    switch(action.type){
        case 'BOOK_SLOT' : 
            const vehicleType = action.payload.vehicle
            const vehicleData = state[vehicleType]; 
            
            if(state,[vehicleType].availableSlots !== 0) {
               
                return{
                    ...state,
                    //[vehicleType]: {... vehicleData, numOfSlotsBooked:  vehicleData.numOfSlotsBooked + 1},

                    [vehicleType]: {... vehicleData, availableSlots:  vehicleData.availableSlots - 1},

                    //availableSlots : {...state.availableSlots,[vehicleType] :state.availableSlots[vehicleType] -1},
                      
                }
            } 
            break;

        case 'LOAD_DATA' :
            console.log('load data :',action.payload);
                const carslen = action.payload.carsBooked.length;
                const bikeslen = action.payload.bikesBooked.length;
                return{
                    ...state,
                    car : {...state.car, availableSlots : state.car.totalNumOfSlots - carslen},
                    bike : { ...state.bike, availableSlots : state.bike.totalNumOfSlots - bikeslen},
                    userDetails : {...state.userDetails,userDetails :action.payload}
                }
             break;
                
        default : return state
    }
    
}

export default bookingReducer