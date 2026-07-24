import "../cssfiles/welcome_page.css"
import { GraduationCap } from "lucide-react";
import {UserCheck}  from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../firebaseConnSetUp";
import { useNavigate } from "react-router-dom";







function Welcome_page(){


    const [selectedRole,setSelectedRole] = useState(" ");
    const [Email_Teacher,setEmail_Teacher]=useState("");
    const [Password_Teacher,setPassword_Teacher]=useState("")
    const [Email_Moderator,setEmail_Moderator]=useState("");
    const [Password_Moderator,setPassword_Moderator]=useState("");
    const [showPassword_Moderator, setShowPassword_Moderator] = useState(false);
    const [showPassword_Teacher, setShowPassword_Teacher] = useState(false);
    const [Error_Email,setEmail_Error]=useState("");
    const [Error_Password,setPassword_Error]=useState("");
    const [Error_Email_M,setEmail_Error_M]=useState("");
    const [Error_Password_M,setPassword_Error_M]=useState("");
    const [Error,setError]=useState("");

  

    const navigate = useNavigate();


    async function moderator_sign_in(){
         if(Email_Moderator =="")
            setEmail_Error_M("Please Enter your email,make sure it includes '@' ");
        if(Password_Moderator == ""){
            setPassword_Error_M("Please Enter your password");
        }
        if(Email_Moderator != "" && Password_Moderator != ""){
            try{

                const userCredentials = await signInWithEmailAndPassword(auth,Email_Moderator,Password_Moderator)
                const user = userCredentials.user;

                if(user){
                    alert("successfully signed in")

                     navigate("/");
                }
                else{
                    setEmail_Error_M("Please write the correct email")
                   
                }


            }
            catch(error){
                  console.error("Error signing in as  a moderator :", error);
                  setError("Incorrect email or password")
                 
            }
        }
        
    }

   

    async function teacher_sign_in(){
        if(Email_Teacher =="")
            setEmail_Error("Please Enter your email,make sure it includes '@' ");
         
        if(Password_Teacher == ""){
            setPassword_Error("Please Enter your password");
        }
        if(Email_Teacher != "" && Password_Teacher != ""){
            try{

                const userCredentials = await signInWithEmailAndPassword(auth,Email_Teacher,Password_Teacher)
                const user = userCredentials.user;

                if(user){
                    alert("successfully signed in")

                     navigate("/");
                }
                else{
                    setEmail_Error("Please write the correct email, you used to register with")
                }


            }
            catch(error){
                  console.error("Error signing in as  a teacher :", error);
                  setError("Incorrect email or password")
                 
            }
        }
    }




    function sign_details_teacher(){
        return(
           
            <section>
            <form  className="form-section-welcome">

                <section className="form-group-welcome">
                    <label className="label-welcome">
                       Email
                    </label>

                    <input
                      type="text"
                      value={Email_Teacher}
                      placeholder="your@gmail.com"
                      className="input-box-welcome"
                      onChange={(e) =>setEmail_Teacher(e.target.value)}
                    />

                <section>{Error_Email}</section>
                
              
                </section>

                <section className="form-group-welcome">
                    <label className="label-welcome">
                       Password
                    </label>
                    
                    <section className="password-welcome-class">

                        <input
                        type="text"
                        value={Password_Teacher}
                        placeholder="Your password"
                        className="input-box-welcome"
                        onChange={(e) =>setPassword_Teacher(e.target.value)}
                        />



                        <button
                            type="button"
                            onClick={() =>setShowPassword_Teacher(!showPassword_Teacher)}
                            className="show-password">

                            {showPassword_Teacher ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    
                        </button>
                    </section>
                   

                  
                <section>{Error_Password}</section>

                </section>



            <section>{Error}</section>
            </form>

            <button className="sign-button"
            
            type="button"  
            onClick={teacher_sign_in}
            >
                Sign In As Teacher
            </button>

            <section className="sign-links">
            <p className="no-account-p">
            Don't have an account? 

            <Link to="/Register" className="Login-Link">Register  here</Link>

            </p>
            </section>

            </section>
           

          


        )
    }


     function sign_details_moderator(){
        return(
           
            <section>
            <form  className="form-section-welcome">

                <section className="form-group-welcome">
                    <label className="label-welcome">
                       Email
                    </label>

                    <input
                      type={showPassword_Teacher ? "text": "password"}
                      value={Email_Moderator}
                      placeholder="your@gmail.com"
                      className="input-box-welcome"
                      onChange={(e) =>setEmail_Moderator(e.target.value)}
                    />

                <section>{Error_Email_M}</section>
               

                </section>

                <section className="form-group-welcome">
                    <label className="label-welcome">
                       Password
                    </label>

                    <section  className="password-welcome-class">

                        <input
                        type={showPassword_Moderator ? "text": "password"}
                        value={Password_Moderator}
                        placeholder="Your password"
                        className="input-box-welcome"
                        onChange={(e) =>setPassword_Moderator(e.target.value)}
                        />



                        <button
                            type="button"
                            onClick={() =>setShowPassword_Moderator(!showPassword_Moderator)}
                            className="show-password">

                            {showPassword_Moderator ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    
                        </button>

                    </section>

                     <section>{Error_Password_M}</section>
                    

                </section>



            <section>{Error}</section>
        
            </form>

            <button className="sign-button"
            
            type="button"
            onClick={moderator_sign_in}
            >
                Sign In As Moderator
            </button>



            
           
            </section>
           

          

         
        )
    
        
            
    }


    function renderForm() {
        if (selectedRole === "teacher") return sign_details_teacher();
        if (selectedRole === "moderator") return sign_details_moderator();
    }

//    async function clear_inputs(){
//         setEmail_Error_M("");
//         setPassword_Error_M("")
//         setError("");
//     }
   


    return(

        <section className="Welcome">

          <section className="welcome-header">
                 <h2>Welcome back</h2>
                 <p>Choose how you’re signing in</p>
        </section>

        <section className="teacher-moderation-sign">

            <section className={selectedRole==="teacher" ? "role-card active-role"  : "role-card" }
            
            onClick={function() {setSelectedRole ("teacher"); }}

            >
               <section className="role-icon">
                  <GraduationCap size={20} />
               </section>
                <p className="role-name">Teacher</p>
                <p className="role-reason">Share & discover</p>
            </section>
            <section 
            
            className={selectedRole==="moderator" ? "role-card active-role"  : "role-card" }
            
            onClick={function() {setSelectedRole ("moderator"); }}
            
             >
                <section className="role-icon">
                  <UserCheck  size={20} />
                </section>
                <p className="role-name">Moderator</p>
                <p className="role-reason">Review submissions</p>
            </section>


       
        </section>
       
        <section>
             {renderForm()} 
        </section>

        
      

        </section>
       
       










    )
}

export default  Welcome_page;