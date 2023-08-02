import axios from './customize-axios';

const signinApi = (email, password) => {
    return axios.post('/api/users/login', { user: { email, password } });
};

const callApiArticles = (limit, offset) => {
    return axios.get(`/api/articles?offset=${offset}&limit=${limit}`);
};

const callApiListTags = (tags) => {
    return axios.get('/api/tags', { tags });
};

export { signinApi, callApiArticles, callApiListTags };
