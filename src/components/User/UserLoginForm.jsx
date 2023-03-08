import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';
import styles from '../../styles/User.module.css';

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isNotEmpty = Object.values(values).some(val => !val)
        if (isNotEmpty) return;
        dispatch(loginUser(values))
        closeForm();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={styles.title}>
                Log In
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email'
                        value={values.email}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        value={values.password}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.link} onClick={() => toggleCurrentFormType('signup')}>
                    Create an account
                </div>

                <button type='submit' className={styles.submit}>Log In</button>
            </form>

        </div>
    )
}

export default UserSignupForm
