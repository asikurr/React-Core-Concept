import React ,{useReducer,useRef} from 'react';
import { patientReducer, patientState } from './patientsStatesInfo';

const PatientsManagement = () => {
    const [state, dispatch] = useReducer( patientReducer, patientState);
    const nameRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type:'ADD_PATIENT',
            id:state.patients.length,
            name:nameRef.current.value
        })
        nameRef.current.value = ''
        console.log(nameRef.current.value)
    }
    return (
        <div style={{ height:'500px', textAlign:'center'}}>
            <h1>Patients Management - {state.patients.length}</h1>

            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="patient" id=""/>
            </form>

           { state.patients.map(pt => <li 
           key={pt.id}
           onClick={()=>dispatch({type:'REMOVE PATIENT', id:pt.id})}
           >{pt.name}</li>)}
        </div>
    );
};

export default PatientsManagement;