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

    const [errorMessage, setErrorMessage] = useState(false);

    const handleSignin = async () => {
        try {
            let res = await signinApi(email, password);

            if (res && res.user.token) {
                localStorage.setItem('token', res.user.token);
                navigate('/');
                setErrorMessage(false);
            }
        } catch (err) {
            console.log(err.data.errors);
            setEmail('');
            setPassword('');
            setErrorMessage(true);
        }

        // else {
        //     // error
        //     if (res && res.status === 403) {
        //         setErrorMessage(true);
        //     }
        // }
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign in</div>
                <NavLink className={cx('content')} to="/signup">
                    Need an account?
                </NavLink>

                {errorMessage && (
                    <b className={cx('title-error')}>
                        * Email or password invalid!
                    </b>
                )}
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
