import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <Container>
            <div>
                <h1>Profile</h1>
            </div>
        </Container>
    );
}

export default Profile;
