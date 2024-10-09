
import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import '../validation/form.css';

const initialState = {
    isSubmitting: false,
    buttonValue: 'Submit',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...state,
                isSubmitting: true,
                buttonValue: 'Submitted',
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Useform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = async (data) => {
        console.log(data);
        dispatch({ type: 'SUBMIT' }); 
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        dispatch({ type: 'RESET' }); 
    };

    return (
        <>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <label className='form-label'>User Name</label>
                <input
                    className='form-input'
                    {...register('name', {
                        required: { value: true, message: 'Name is required' },
                        minLength: { value: 4, message: 'Minimum length is 4' },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Only letters are allowed'
                        }
                    })}
                />
                {errors.name && <span className='error'>{errors.name.message}</span>}

                <label className='form-label'>User Phone Number</label>
                <input
                    className='form-input'
                    {...register('phone', {
                        required: { value: true, message: 'Phone number is required' },
                        minLength: { value: 10, message: 'Phone number must be 10 digits' },
                        maxLength: { value: 10, message: 'Phone number must be 10 digits' },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Only digits are allowed'
                        }
                    })}
                />
                {errors.phone && <span className='error'>{errors.phone.message}</span>}

                <label className='form-label'>User Email</label>
                <input
                    className='form-input'
                    {...register('email', {
                        required: { value: true, message: 'Email is required' },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                            message: 'Email must be a valid Gmail address'
                        }
                    })}
                />
                {errors.email && <span className='error'>{errors.email.message}</span>}

                <label className='form-label'>User Password</label>
                <input
                    className='form-input'
                    {...register('password', {
                        required: { value: true, message: 'You must set a password' },
                        minLength: { value: 6, message: 'Password must contain at least 6 characters' },
                        maxLength: { value: 12, message: 'Password can contain at most 12 characters' },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%!#])[A-Za-z\d@%!#]{6,12}$/,
                            message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character (@!#)'
                        }
                    })}
                />
                {errors.password && <span className='error'>{errors.password.message}</span>}

                <div className="submit">
                    <button type="submit" disabled={state.isSubmitting}>{state.buttonValue}</button>
                </div>
            </form>
        </>
    );
};

export default Useform;
