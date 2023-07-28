import axios from './customize-axios';

const signinApi = (email, password) => {
    return axios.post('/api/users/login', { user: { email, password } });
};

export { signinApi };
