import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Setting() {
    return (
        <Container>
            <div>
                <h1>Setting</h1>
            </div>
        </Container>
    );
}

export default Setting;
