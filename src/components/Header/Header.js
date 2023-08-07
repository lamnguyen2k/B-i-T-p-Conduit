import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const cx = classNames.bind(styles);

function Header(props) {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <div className={cx('wrapper')}>
                <NavLink className={cx('title')} to="/">
                    conduit
                </NavLink>
                <div className={cx('option')}>
                    <NavLink
                        className={(nav) =>
                            cx('btn-home', { active: nav.isActive })
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    {user && !user.auth && (
                        <>
                            <NavLink
                                className={(nav) =>
                                    cx('btn-signin', { active: nav.isActive })
                                }
                                to="/signin"
                            >
                                Sign in
                            </NavLink>
                            <NavLink
                                className={(nav) =>
                                    cx('btn-signup', { active: nav.isActive })
                                }
                                to="/signup"
                            >
                                Sign up
                            </NavLink>
                        </>
                    )}
                    {user && user.auth && (
                        <>
                            <NavLink
                                className={(nav) =>
                                    cx('btn-new-articles', {
                                        active: nav.isActive,
                                    })
                                }
                                to="/newarticles"
                            >
                                <i
                                    className={cx(
                                        'fa-regular fa-pen-to-square icon-new-articles',
                                    )}
                                ></i>
                                <span className={cx('new-article')}>
                                    New Articles
                                </span>
                            </NavLink>
                            <NavLink
                                className={(nav) =>
                                    cx('btn-setting', { active: nav.isActive })
                                }
                                to="/setting"
                            >
                                <i className="fa-solid fa-gear"></i>
                                <span className={cx('setting')}>Setting</span>
                            </NavLink>

                            {user && user.username && (
                                <NavLink
                                    className={(nav) =>
                                        cx('btn-profile', {
                                            active: nav.isActive,
                                        })
                                    }
                                    to="/profile"
                                >
                                    <i className="fa-solid fa-user"></i>
                                    <span className={cx('profile')}>
                                        {user.username}
                                    </span>
                                </NavLink>
                            )}
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default Header;
