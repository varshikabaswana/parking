import axios from "axios"

const bookSlot = (values) => {
    return{
        type:'BOOK_SLOT',
        payload:values
    }
}
export const loadInitialData = () => {

    return async (dispatch) =>  {
        const carUrl ='http://localhost:5000/car';
        const carsBooked =  await axios.get(carUrl);
        console.log(carsBooked)
                const clength = carsBooked.data.length;
        console.log('cars booked ',clength)

        const bikeUrl ='http://localhost:5000/bike';
        const bikesBooked = await  axios.get(bikeUrl);
        const blength = bikesBooked.data.length;
        console.log('bikes booked ',blength)
        dispatch(fetchData(carsBooked.data,bikesBooked.data));
        
    }
}

const fetchData = (carsBooked,bikesBooked) => {
    return { 
    type : 'LOAD_DATA',
    payload: {
        carsBooked,
        bikesBooked
    }
}
}
const resetSlots =() => {
    return{
        type:'RESET_SLOTS'
      
    }
}


export {bookSlot,resetSlots};