import Header from './components/Header/Header';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import TableUsers from './components/pages/TableUsers/TableUser';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<TableUsers />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
