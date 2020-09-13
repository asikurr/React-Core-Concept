export const patientState ={
    patients: []
}

export const patientReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatients = {
                id:action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatients]
            return {patients:allPatients};
        case 'REMOVE PATIENT':
            const remainingPatients = state.patients.filter(pt => pt.id !== action.id);
            const newPatient = {patients:remainingPatients}
            return newPatient;
        
        default:
            return state;

    }
}