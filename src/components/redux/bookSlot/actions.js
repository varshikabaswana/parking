const bookSlot = (values) => {
    return{
        type:'BOOK_SLOT',
        payload:values
    }
}

const resetSlots =() => {
    return{
        type:'RESET_SLOTS'
      
    }
}


export {bookSlot,resetSlots};