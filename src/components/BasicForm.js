import useInput from "../hooks/use-input";

const BasicForm = () => {

  const validValue = value =>  value.trim() !== ''; 
  const validEmail = value => value.includes('@');

  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetfName,
  } = useInput(validValue)

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetlName,
  } = useInput(validValue)

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail)

  const submitHandler = (e) => {
    e.preventDefault();
    if(!fNameIsValid && !lNameIsValid && !emailIsValid){
      return;
    }
    resetfName()
    resetlName()
    resetEmail()
  }

  let formIsValid = false;
  if(fNameIsValid && lNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const classesfNameInvalid = fNameError ? 'form-control invalid': 'form-control';
  const classeslNameInvalid = lNameError ? 'form-control invalid': 'form-control';
  const classesEmailInvalid = emailError ? 'form-control invalid': 'form-control';



  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={classesfNameInvalid}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='fName'
            onChange={fNameChangeHandler}
            value={fNameValue}
            onBlur={fNameBlurHandler} />
        {fNameError && <p className="error-text">First Name must not be empty.</p>}
        </div>
        <div className={classeslNameInvalid}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='lName'
            onChange={lNameChangeHandler}
            value={lNameValue}
            onBlur={lNameBlurHandler} />
        {lNameError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={classesEmailInvalid}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
            type='email'
            id='lName'
            onChange={emailChangeHandler}
            value={emailValue}
            onBlur={emailBlurHandler} />
      {emailError && <p className="error-text">Email must includes @.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
