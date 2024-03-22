import { Route, Routes } from 'react-router-dom';
import Chat from '../pages/chat/chat';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Chat />} />
        </Routes>
    );
};

export default RoutesComponent;