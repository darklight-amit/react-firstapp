
import { useState } from 'react';
import './App.css';

function EnrolementForm(){

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState(" ");
        const [welcomeMsg, setWelcomeMsg] = useState(" ");

        const handleSubmit = (event) => {
            setWelcomeMsg(`Welcome ${firstName} ${lastName}');
            
            event.preventDefault();
        };
    

    return (
        <div className='enrolForm' onSubmit={handleSubmit}>
            
        
            <form>
            <h3>Student Enrolement Form</h3>
            <label>First Name:</label>
            <input type='text' placeholder='First Name'  onBlur={(event) => setFirstName(event.target.value)}/>
            <br />
            <br />
            <label>Last Name:</label>
            <input type='text' placeholder='Last Name'  onBlur={(event)=>setFirstName(event.target.value)}/>
            <br />
            <br />
            <input type='submit'  value = 'Submit' />       
            </form>
            <label id="studentMsg" className="message">mylable</label> 

            
        </div>
    )

}

export default EnrolementForm;