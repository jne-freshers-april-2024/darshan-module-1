import './form.css'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormValidation = () => {
    const initialValue = {
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [formValue, setFormValue] = useState(initialValue);
    const [validUserName, setValidUserName] = useState(false);
    const [errors, setErrors] = useState({});

    const formHandle = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const validate = () => {

        const specialCharPattern = /[@!$]/;
        let tempErrors = {};
        if (!formValue.username) {
            tempErrors.username = "Username is required";
            setValidUserName(false);
        } else {
            setValidUserName(true);
        }
        if (!formValue.phone) {
            tempErrors.phone = "Phone number is required";
        }else if(formValue.phone.length < 10){
            tempErrors.phone = "Phone number contain 10 digit";
        }
        if (!formValue.email) {
            tempErrors.email = "Email is required";
        }
        if (!formValue.password) {
            tempErrors.password = "Password is required";
        }else if (formValue.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        } else if (!formValue.password.match(specialCharPattern)) {
            tempErrors.password = "Password must contain at least one special symbol like (@, !, $)";
        }
        
        if (formValue.password !== formValue.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log({ ...formValue });
            setFormValue(initialValue);
        }
    };

    return (
        <>
        <pre>{JSON.stringify(formValue,undefined,2)}</pre>
        <div className='form-container'>
            <h3>Form Validation</h3>
            <form className='form-control' onSubmit={submitHandler}>
                <label className='form-label'>User Name</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='UserName'
                    className='form-input'
                    value={formValue.username}
                    onChange={formHandle}
                />  
                {errors.username && <span className='error'>{errors.username}</span>}

                <label className='form-label'>User Phone Number</label>
                <input
                    type='number'
                    name='phone'
                    id='phone'
                    placeholder='Phone'
                    className='form-input'
                    value={formValue.phone}
                    onChange={formHandle}
                />
                {errors.phone && <span className='error'>{errors.phone}</span>}

                <label className='form-label'>User Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    className='form-input'
                    value={formValue.email}
                    onChange={formHandle}
                />
                {errors.email && <span className='error'>{errors.email}</span>}

                <label className='form-label'>User Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    className='form-input'
                    value={formValue.password}
                    onChange={formHandle}
                />
                {errors.password && <span className='error'>{errors.password}</span>}

                <label className='form-label'>Confirm Password</label>
                <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='Confirm Password'
                    className='form-input'
                    value={formValue.confirmPassword}
                    onChange={formHandle}
                />
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}

                <button className='submit-button' type='submit'>Submit Value</button>
            </form>
        </div>
        </>
    );
};

export default FormValidation;
