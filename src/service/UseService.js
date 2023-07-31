import axios from './customize-axios';

const signinApi = (email, password) => {
    return axios.post('/api/users/login', { user: { email, password } });
};

const callApiArticles = (articles) => {
    return axios.get('/api/articles', { articles });
};

const callApiListTags = (tags) => {
    return axios.get('/api/tags', { tags });
};

export { signinApi, callApiArticles, callApiListTags };
