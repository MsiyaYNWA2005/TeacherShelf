import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BookOpen } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConnSetUp";
import { doc, getDoc } from "firebase/firestore";
import "./App.css"

import Discovery from "./pages/Discovery.jsx";
import Register from "./pages/Register.jsx";
import Moderation from "./pages/Moderation.jsx";
import PostBook from "./pages/PostBook.jsx";
import Welcome from "./pages/welcome_page"
import { useEffect, useState } from 'react';


function App() {

   const [user,setUser] =  useState(null);


   useEffect(function()  {
       
       const unsubscribe = onAuthStateChanged(auth, async function(firebaseUser)  {

         if(firebaseUser){

          const docSnap = await getDoc(doc(db,"teachers", firebaseUser.uid));
          setUser({
            uid : firebaseUser.uid,
            email:firebaseUser.email,
            role:docSnap.data()?.role
          });



         }
         else{
            setUser(null);
         }


          
       })
     
   return function(){unsubscribe();};
   },[])


    return (

        <BrowserRouter>


            <nav className="Navigation"  user={user}>
             <section className="TeacherShelf_Logo">
                <div className="logo-icon">
                    <BookOpen size={20} />
                </div>
                <Link className="Logo">TeacherShelf</Link>
             </section>
              
                <section className="Navigation_Link">
                    <Link className="Discovery_Link"  to="/"><button>Discovery</button></Link>
                    {!user &&  <Link className="Sign_In"  to="/Welcome"> <button>Sign</button></Link>}
                    {/* {user && user.role === "teacher" && (<Link className="Register_Link"  to="/Register">Register</Link>)} */}
                    {user && user.role === "teacher" && (<Link className="Register_Link"  to="/PostBook">+ Share a Book</Link>)}
                    {  user && user.role === "moderator" &&   (<Link className="Moderation_Link"  to="/Moderation"><button>Moderation</button></Link>)}
                    {user && (
                        <button className="Sign_Out" onClick={function(){auth.signOut()}}>Sign out</button>
                    )}
                </section>
                
            </nav>



            <section className="page-content">
                <Routes>
                <Route path="/" element={<Discovery />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Moderation" element={<Moderation />} /> 

                <Route path="/PostBook" element={<PostBook />} />
                <Route path="/Welcome" element={<Welcome />} />
            </Routes>
            </section>
        </BrowserRouter>




    );

}

export default App;