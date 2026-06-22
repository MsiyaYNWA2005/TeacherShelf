import "../cssfiles/Register.css"
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function Register(){
    return( 
            <section className="Register" >
                <section className="Teacher_shelf">
                
                <section className="Logo-Register">
                       <div className="logo-icon-register">
                            <BookOpen size={20} />
                        </div>
                        <h1 className="Teacher_logo">TeacherShelf</h1>
                    </section>
                
                    
                    <section className="section-teacher"><p>“Your classroom wisdom deserves more than a WhatsApp group.”</p></section>
                    <section className="teacher_experience">
                    <section className="button_initials">
                        <button>
                        SO
                        </button>
                    </section>
                        
                    <section  className="teacher-info">
                        <h2>Ms. Sarah Okafor</h2>
                        <p>Westbrook High School</p>
                        <p>“I've found 8 new books to teach this semester.”</p>
                    </section>
                    </section>
                    <section className="teacher_experience">
                        <section className="button_initials">
                        <button>
                        DF
                        </button>
                        </section>
                        
                    <section className="teacher-info">
                        <h2>Mr. Daniel Ferreira</h2>

                        <p>St. Augustine Secondary</p>

                        <p>“My Grade 11s are reading better than ever.”</p>
                    </section>
                    </section>
                    <section className="teacher_experience">
                        <section className="button_initials">
                        <button>
                            AD
                        </button>
                        </section>
                       
                    <section className="teacher-info">
                        <h2>Dr. Amara Diallo</h2>

                        <p>Clearwater Academy</p>

                        <p>“Finally, a place where teaching recommendations stick.”</p>
                    </section>
                    </section>
                    <footer className="footer-class">© 2026 TeachShelf</footer>
                </section>

                <section className="Register_section">
                    <section className="">
                        <h2>Create your teacher profile</h2>
                        <p>Join educators sharing what works in their classrooms.</p>
                    </section>
                
                   
                    
                    <form className="form-section">
                    <section className="form-group">
                        <label
                        className="label-input">
                        Full name
                        </label>
                        <input 
                        type="text"
                        placeholder="Ms. Jane Smith"
                        className="input-box"
                        />
                        
                    </section>
                    

                    <section className="form-group">
                        <label
                         className="label-input">
                        Email
                        </label>
                        <input type="text"
                        placeholder="janesmith@gmail.com"
                        className="input-box" />
                        
                    </section>


                        <section className="form-group">
                        <label
                        
                        className="label-input">
                        School name
                         </label>
                        <input type="text"
                        placeholder="WestBrook High School"
                        className="input-box" />
                       
                        </section>
                        
                    </form>



                        <section className="subjects">
                        <h2>Subjects you teach</h2>
                        <button className="subject_name">Mathematics</button>
                        <button className="subject_name">Physical Sciences</button>
                        <button className="subject_name">Accounting</button>
                        <button className="subject_name">Life Sciences (Biology)</button>
                        <button className="subject_name">Geography </button>
                        <button className="subject_name">History</button>
                        <button className="subject_name">Agriculture</button>
                        <button className="subject_name">Business studies</button>
                        <button className="subject_name">Economics</button>
                        </section>

                    <section className="grade-levels">
                    <h2>Grade levels you teach</h2>

                        
                    <input type="checkbox" id="grade_10" name="grade_10" value="Grade 10"   className="checkbox-input"  />
                    <label htmlFor="grade_10"  className="label-input" >Grade 10</label>


                    <input type="checkbox" id="grade_11" name="grade_11" value="Grade 11" className="checkbox-input"/>
                    <label htmlFor="grade_11"  className="label-input" >Grade 11</label>



                    <input type="checkbox" id="grade_12" name="grade_12" value="Grade 12"   className="checkbox-input"   />
                    <label htmlFor="grade_12"  className="label-input" >Grade 12</label>

                        


                    </section>

                        
                    <form className="form-section">

                    <section className="form-group">
                            <label 
                             className="label-input">
                                Password
                            </label>
                             <input type="text" placeholder="Atleast 8 Characters"
                            className="input-box" />
                    </section>
                            


                    <section className="form-group">
                            <label
                            className="label-input">Confirm password</label>
                             <input type="text"  placeholder="Atleast 8 Characters"
                              className="input-box" />
                    </section>
                        
                    </form>
                    
                        
                    

                    <button type="button" id="submit_details" className="button_register_details">
                            Create my profile
                    </button>
                      
                    <section className="sign_link"><p className="already-sign">Already registered?  <Link to="/Login" className="Login-Link">Sign in</Link></p></section>
                    </section>


                   
         </section>
    )
}

export default Register;