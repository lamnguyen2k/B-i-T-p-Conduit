import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
const cx = classNames.bind(styles);

function Setting() {
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Your Settings</div>

                <input
                    className={cx('new-url')}
                    placeholder="https://api.realworld.io/images/smiley-cyrus.jpeg"
                />
                <input
                    type="password"
                    className={cx('user-name')}
                    placeholder="lam"
                />
                <textarea
                    className={cx('new-bio')}
                    placeholder="Short bio about you"
                ></textarea>
                <input className={cx('new-email')} placeholder="Email" />
                <input
                    className={cx('new-password')}
                    placeholder="New password"
                />

                <button className={cx('btn-settings')}>Update Settings</button>
            </div>
            <div className={cx('wrapper-btn-logout')}>
                <NavLink
                    className={cx('btn-logout')}
                    to="/"
                    onClick={() => handleLogout()}
                >
                    Or click here to logout.
                </NavLink>
            </div>
        </Container>
    );
}

export default Setting;
