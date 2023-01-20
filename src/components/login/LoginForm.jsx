import {useForm} from 'react-hook-form'

const userNameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    /*
    * This is JavaScript code that is using the `useForm` hook from a library called react-hook-form.
    * `register´ is a function that is used to register input elements (e.g. text fields, checkboxes, etc.)
      with the form so that their values can be accessed and validated when the form is submitted.

    * `handleSubmit` is a function that is used to handle the form submission event.
    * It typically takes a callback function as its argument, which is executed when the form is submitted.
    * `formState.errors` is an object that contains any errors that have been detected in the form's input elements.
    * The errors variable is destructured from the formState object returned by the useForm hook.
    * This code is likely to be used within a functional component in React, and it is mainly used for form validation and submission.
    * */

    const onSubmit = (data) => {
        console.log(data);
    };
    console.log(errors)


    const handleError = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "required") {
            return <span>Username is required</span>;
        }

        if (errors.username.type === "minLength") {
            return <span>Minimum length is required</span>;
        }
    })()

    /*
    * The () at the end of the function definition is used to immediately invoke the function.

    * This means that the function is executed as soon as it is defined, and the return value of the function is assigned to the variable handleError.

    * It's equivalent to calling the function with handleError().

    * This pattern is useful when you want to create a function that only needs to be executed once, and you want to store its return value in a variable for later use.

    * In this case, the handleError function is invoked only once when the component first renders and the returned value is stored in the variable handleError and that value is used later in the JSX.
    * */


    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input type="text"
                           placeholder="arif"
                           {...register("username", userNameConfig)}/>
                    {handleError}
                    {/*{(errors.username && errors.username.type ==="required")&& <span>Username is required.</span>}*/}
                    {/*{(errors.username && errors.username.type ==="minLength") && <span>MinLength is required.</span>}*/}
                </fieldset>
                <button type={"submit"}>Continue</button>

            </form>
        </>
    );
}

export default LoginForm;