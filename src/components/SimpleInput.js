import React from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = () => {

  const {
    value: enteredName,
    isValid: enterNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== '');


  ///////////////////////////////

  let formIsValid = false;

    if(enterNameIsValid && enterEmailIsValid){
      formIsValid = true;
    }  
  
  ////////////////////////////////

  ////////////////////////////////////////

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!enterNameIsValid && !enterEmailIsValid){
      return;
    };

    resetNameInput();
    resetEmailInput();
  };

  ////////////////////////////////////////
 const enteredInput = () => {
    if(!enterNameIsValid){
      return "Name"
    }else if(!enterEmailIsValid){
      return "Email"
    }else{
      return "Form"
    }
 }
  ////////////////////////////////////////

  const classesInvalid = (nameInputIsInvalid || emailInputIsInvalid) ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classesInvalid}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName} 
          onBlur={nameInputBlurHandler} />

        <label htmlFor='name'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          value={enteredEmail} 
          onBlur={emailInputBlurHandler} />
      </div>
      {(nameInputIsInvalid || emailInputIsInvalid) && <p className='error-text' >{enteredInput()} must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
