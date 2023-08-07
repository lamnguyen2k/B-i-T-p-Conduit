import Header from './components/Header/Header';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import TableUsers from './components/pages/TableUsers/TableUser';
import NewArticles from './components/pages/NewArticles';
import Setting from './components/pages/Setting';
import Profile from './components/pages/Profile';
import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';

function App() {
    const { user, loginContext } = useContext(UserContext);
    console.log('🚀 ~ file: App.js:14 ~ App ~ user:', user);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            loginContext(
                localStorage.getItem('username', localStorage.getItem('token')),
            );
        }
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<TableUsers />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/newarticles" element={<NewArticles />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
