import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signinApi } from '../../../service/UseService';

const cx = classNames.bind(styles);

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async () => {
        let res = await signinApi(email, password);
        console.log('check res', res);
        if (res && res.token) {
            localStorage.setItem('token', res.token);
            navigate('/');
        } else {
            // error
            if (res && res.data) {
                alert('error', res.data);
            }
        }
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign in</div>
                <NavLink className={cx('content')} to="/signup">
                    Need an account?
                </NavLink>
                <input
                    className={cx('text-email')}
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    className={cx('text-password')}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
