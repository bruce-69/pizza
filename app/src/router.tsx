
import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/router'; 
import Home from "pages/Home/index";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<
                 />} />
        </Routes>
    );
}

export default Router;