import axios from './customize-axios';
// Call Api SignIn
const signinApi = (email, password) => {
    return axios.post('/api/users/login', { user: { email, password } });
};

// Call Api SignUp
const signupApi = (email, password, username) => {
    return axios.post('/api/users', { user: { email, password, username } });
};

// Call Api List Articles
const callApiArticles = (limit, offset) => {
    return axios.get(`/api/articles?offset=${offset}&limit=${limit}`);
};

// Call Api List Tags
const callApiListTags = (tags) => {
    return axios.get('/api/tags', { tags });
};

// Call Api New Articles
const callApiCreateArticles = (title, description, body, tagList) => {
    return axios.post('/api/articles', {
        article: { title, description, body, tagList },
    });
};

export {
    signinApi,
    signupApi,
    callApiArticles,
    callApiListTags,
    callApiCreateArticles,
};
