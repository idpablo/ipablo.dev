import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import About from '../Views/About';
import Contact from '../Views/Contact';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;