import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { signupApi } from '../../../service/UseService';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SignUp() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSignup = async () => {
        try {
            let res = await signupApi(email, password, userName);
            if (res && res.user.token) {
                localStorage.setItem('token', res.user.token);
                navigate('/');
            }
        } catch (err) {
            console.log('🚀 ~ file: SignUp.js:26 ~ handleSignup ~ err:', err);
            const keys = Object.keys(err.data.errors);
            const arr = [];

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const values = err.data.errors[key];
                for (let j = 0; j < values.length; j++) {
                    const value = values[j];
                    arr.push(`${key} ${value}`);
                }
                setErrors(arr);
            }
        }
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign Up</div>
                <NavLink className={cx('content')} to="/signin">
                    Have an account?
                </NavLink>
                <ul>
                    {errors.map((item, index) => {
                        return (
                            <li className={cx('errors')} key={index}>
                                {item}
                            </li>
                        );
                    })}
                </ul>

                <input
                    className={cx('text-user-name')}
                    placeholder="Username"
                    onChange={(event) => setUserName(event.target.value)}
                />
                <input
                    className={cx('text-email')}
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    className={cx('text-password')}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    className={cx('btn-signin')}
                    onClick={() => handleSignup()}
                >
                    Sign Up
                </button>
            </div>
        </Container>
    );
}

export default SignUp;
