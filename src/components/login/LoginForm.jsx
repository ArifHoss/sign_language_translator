import {useForm} from 'react-hook-form'

const userNameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

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