import classNames from 'classnames/bind';
import styles from './TableUsers.module.scss';

const cx = classNames.bind(styles);

function TableUsers(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>conduit</h1>
                <br />
                <p className={cx('content')}>
                    A place to share your knowledge.
                </p>
            </div>
        </div>
    );
}

export default TableUsers;
