import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Discovery from "./pages/Discovery.jsx";
import Register from "./pages/Register.jsx";
import Moderation from "./pages/Moderation.jsx";
import PostBook from "./pages/PostBook.jsx";


function App() {
    return (

        <BrowserRouter>


            <nav className="Navigation">
                <Link className="Logo">TeacherShelf</Link>
                <section className="Navigation_Link">
                    <Link className="Discovery_Link"  to="/"><button>Discovery</button></Link>
                    <Link className="Register_Link"  to="/Register"><button>Register</button></Link>
                    <Link className="Moderation_Link"  to="/Moderation"><button>Moderation</button></Link>
                    <Link className="PostBook_Link"  to="/PostBook"> <button>+ Share a Book</button></Link>
                </section>
                
            </nav>



            <Routes>
                <Route path="/" element={<Discovery />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Moderation" element={<Moderation />} />
                <Route path="/PostBook" element={<PostBook />} />
            </Routes>
        </BrowserRouter>




    );

}

export default App;