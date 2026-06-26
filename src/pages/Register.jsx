import "../cssfiles/Register.css"
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { db } from "../firebaseConnSetUp";
import { collection, addDoc } from "firebase/firestore";





function GradeRadio({id,name ,value,checked,onChange}){
        return(
            <label className="radio-label" htmlFor={id}>
                   <input
                    type="radio"
                    id={id} 
                    name={name} 
                    value={value}  
                    className="radio-hidden"
                    checked={checked}
                    onChange={onChange}
                   />
                <span className="radio-box">
                {checked && <Check size={14} color="white" />}

                </span>
                {value}
            </label>
        );
}


function AddSubjects({value,onClick,className}){
    return(
       <button type="button" 
       className={className} 
       onClick={onClick}>
       {value}</button>
    )
}




function Register(){


    const [showPassword, setShowPassword] = useState(false);
    const [selectedGrade,setSelectedGrade] = useState(null);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [FullName ,setFullName ]=useState("");
    const [SchoolName,setSchoolName]=useState("");
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[Confirm_password,setConfirmPassword] = useState("");
    const [selectedSubject, setSelectedSubject] = useState([]);


function Add_Subject(subject){
    if(selectedSubject.includes(subject)){
        setSelectedSubject(selectedSubject.filter((s)  => s !==subject));
    }
    else{
        setSelectedSubject([...selectedSubject,subject]);
    }
}


async function addTeacher(){
    if(FullName !="" && SchoolName != "" && Email != ""  && password !="" && Confirm_password !="" && selectedGrade !=""){
        try{
            if(Confirm_password === password){
                await addDoc(collection(db,"teachers"),{
                    name: FullName,
                    school: SchoolName,
                    email:Email,
                    grade: selectedGrade,
                    subjects:selectedSubject,
                    createdAt: new Date(),
                });

    
           setFullName("");
           setSchoolName("");
           setEmail("");
           setPassword("");
           setConfirmPassword("");
           setSelectedGrade(null);
        

            alert("Student saved successfully!");
            }
            else{
                alert("Failed to save teacher. Check Password and Confirmation Password");
            }
        
        }
        catch(error){
            console.error("Error saving Teacher :", error);
            alert("Failed to save teacher. Check the console.");
        }
        

    }

}
     
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
                        value={FullName}
                        type="text"
                        placeholder="Ms. Jane Smith"
                        className="input-box"
                        onChange={(e) =>setFullName(e.target.value)}
                        />
                    
                    </section>
                    

                    <section className="form-group">
                        <label
                        className="label-input">
                        Email
                        </label>
                        <input type="text"
                        value={Email}
                        onChange={(e) =>setEmail(e.target.value)}
                        placeholder="janesmith@gmail.com"
                        className="input-box" />
                    </section>


                        <section className="form-group">
                        <label
                        
                        className="label-input">
                        School name
                         </label>
                        <input type="text"
                        value={SchoolName}
                        onChange={(e) =>setSchoolName(e.target.value)}
                        placeholder="WestBrook High School"
                        className="input-box" />
                       
                        </section>
                        
                        
                    </form>


                        
                        <section className="subjects">
                        <h2><label className="label-input">Subjects you teach</label></h2>
                        
                        <AddSubjects className="subject_name" value="Mathematics"  onClick={() => Add_Subject("Mathematics")}/>
                        <AddSubjects className="subject_name" value="Physical Science"  onClick={() =>Add_Subject("Physical Science")}/>
                        <AddSubjects className="subject_name" value="Accounting"  onClick={() =>Add_Subject("Accounting")}/>
                        <AddSubjects className="subject_name" value="Life Sciences (Biology)"  onClick={() =>Add_Subject("Life Sciences (Biology)")}/>
                        <AddSubjects className="subject_name" value="Geography" onClick={() =>Add_Subject("Geography")}/>
                       
                        <AddSubjects className="subject_name" value="History" onClick={() =>Add_Subject("History")}/>
                        <AddSubjects className="subject_name" value="Mathematical Literacy" onClick={() =>Add_Subject(" Mathematical Literacy")}/>
                        <AddSubjects className="subject_name" value="Agriculture" onClick={() =>Add_Subject("Agriculture")}/>
                        <AddSubjects className="subject_name" value="Business studies"  onClick={() =>Add_Subject("Business studies")}/>
                        <AddSubjects className="subject_name" value="Economics"  onClick={() =>Add_Subject("Economics")}/>
                      
                        </section>

                    <section className="grade-levels">


                    <section><h2><label className="label-input">Grade levels you teach</label></h2></section>
                   

                        
                   <section className="grades">
                    <GradeRadio id="grade_10" name="grade_level" value="Grade 10"   checked={selectedGrade === "Grade 10" } onChange={() => setSelectedGrade("Grade 10")}/>
                    
                    <GradeRadio id="grade_11" name="grade_level" value="Grade 11"   checked={selectedGrade === "Grade 11"} onChange={() => setSelectedGrade("Grade 11")}/>
                  
                    <GradeRadio id="grade_12" name="grade_level" value="Grade 12"   checked={selectedGrade === "Grade 12"} onChange={() => setSelectedGrade("Grade 12")}/>
                    
                    

                   </section>
                        


                    </section>

                        
                    <form className="form-section">

                    <section className="form-group">
                            <label 
                             className="label-input">
                                Password
                            </label>
                             


                            <section className="password-class">
                                 <input type={showPassword ? "text": "password"}
                                 value={password}
                                 placeholder="Atleast 8 Characters"
                                 onChange={(e) =>setPassword(e.target.value)}
                                className="input-box" />

                                <button
                                type="button"
                                onClick={() =>setShowPassword(!showPassword)}
                                className="show-password">

                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    
                                </button>
                            </section>
                            
                    </section>
                            


                    <section className="form-group">
                            <label
                            className="label-input">Confirm password</label>
                            <section className="password-class">
                                 <input type={showConfirmPassword ? "text": "password"}
                                 value={Confirm_password} 
                                 placeholder="Atleast 8 Characters"
                                 onChange={(e) =>setConfirmPassword(e.target.value)}
                                className="input-box" />

                                <button
                                type="button"
                                onClick={() =>setShowConfirmPassword(!showConfirmPassword)}
                                className="show-password">

                                {showConfirmPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    
                                </button>
                            </section>
                    </section>
                        
                    </form>
                    
                        
                    

                    <button type="button"  onClick={addTeacher}  id="submit_details" className="button_register_details">
                            Create my profile
                    </button>
                      
                    <section className="sign_link"><p className="already-sign">Already registered?  <Link to="/Login" className="Login-Link">Sign in</Link></p></section>
                    </section>


                   
         </section>
    )
}

export default Register;