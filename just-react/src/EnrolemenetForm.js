
import './App.css';

function EnrolementForm(){

    return (
        <div className='enrolForm'>
            
        
            <form>
            <h3>Student Enrolement Form</h3>
            <label>First Name:</label>
            <input type='text' placeholder='First Name' />
            <br />
            <br />
            <label>Last Name:</label>
            <input type='text' placeholder='Last Name' />
            <br />
            <br />
            <input type='submit'  value = 'Submit' />       
            <label id="studentMsg" className="message"></label> 
            </form>
            
        </div>
    )

}

export default EnrolementForm;