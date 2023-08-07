import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signinApi } from '../../../service/UseService';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const cx = classNames.bind(styles);

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const { loginContext } = useContext(UserContext);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, []);

    const handleSignin = async () => {
        try {
            let res = await signinApi(email, password);

            if (res && res.user.token) {
                loginContext(res.user.username, res.user.token);
                navigate('/');
            }
        } catch (err) {
            const keys = Object.keys(err.data.errors);
            const arr = [];
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];

                const values = err.data.errors[key];

                for (let j = 0; j < values.length; j++) {
                    const value = values[j];

                    arr.push(`${key} ${value}`);
                }
            }

            setErrors(arr);
            setPassword('');
            setEmail('');
        }
    };

    const handleEnter = async (e) => {
        if (e.key === 'Enter') {
            try {
                let res = await signinApi(email, password);

                if (res && res.user.token) {
                    loginContext(res.user.username, res.user.token);
                    navigate('/');
                }
            } catch (err) {
                const keys = Object.keys(err.data.errors);
                const arr = [];
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];

                    const values = err.data.errors[key];

                    for (let j = 0; j < values.length; j++) {
                        const value = values[j];

                        arr.push(`${key} ${value}`);
                    }
                }

                setErrors(arr);
                setPassword('');
                setEmail('');
            }
        }
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign in (lamnguyen@gmail.com)</div>
                <NavLink className={cx('content')} to="/signup">
                    Need an account?
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
                    className={cx('text-email')}
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onKeyDown={handleEnter}
                />
                <input
                    type="password"
                    className={cx('text-password')}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={handleEnter}
                />
                <button
                    className={
                        email && password ? cx('btn-signin') : cx('active')
                    }
                    onClick={() => handleSignin()}
                >
                    Sign in
                </button>
            </div>
        </Container>
    );
}

export default SignIn;
