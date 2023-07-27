import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignIn(props) {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Sign in</div>
                <NavLink className={cx('content')} to="/signup">
                    Need an account?
                </NavLink>
                <input className={cx('text-email')} placeholder="Email" />

                <input
                    type="password"
                    className={cx('text-password')}
                    placeholder="Password"
                />
                <button className={cx('btn-signin')}>Sign in</button>
            </div>
        </Container>
    );
}

export default SignIn;
