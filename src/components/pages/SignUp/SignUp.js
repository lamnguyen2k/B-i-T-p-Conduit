import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function signUp(props) {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign Up</div>
                <NavLink className={cx('content')} to="/signin">
                    Have an account?
                </NavLink>
                <input
                    className={cx('text-user-name')}
                    placeholder="Username"
                />
                <input className={cx('text-email')} placeholder="Email" />
                <input
                    type="password"
                    className={cx('text-password')}
                    placeholder="Password"
                />
                <button className={cx('btn-signin')}>Sign Up</button>
            </div>
        </Container>
    );
}

export default signUp;
