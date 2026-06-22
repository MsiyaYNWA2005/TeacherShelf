import "../cssfiles/Register.css"

function Register(){
    return(
        <>
        <section className="Register" >
            <section className="Teacher_shelf">
            <h1>TeacherShelf</h1>
            <p>“Your classroom wisdom deserves more than a WhatsApp group.”</p>
            <section className="teacher_experience">
            <section className="button_initials"></section>
                <button>
                  SO
                </button>
            <section>
                <h2>Ms. Sarah Okafor</h2>

                <p>Westbrook High School</p>

                <p>“I've found 8 new books to teach this semester.”</p>
            </section>
            </section>
            <section className="teacher_experience">
                <section className="button_initials"></section>
                <button>
                   DF
                </button>
            <section>
                <h2>Mr. Daniel Ferreira</h2>

                <p>St. Augustine Secondary</p>

                <p>“My Grade 11s are reading better than ever.”</p>
            </section>
            </section>
            <section className="teacher_experience">
                <section className="button_initials"></section>
                <button>
                    AD
                </button>
            <section>
                <h2>Dr. Amara Diallo</h2>

                <p>Clearwater Academy</p>

                <p>“Finally, a place where teaching recommendations stick.”</p>
            </section>
            </section>
        </section>






        <section className="Register_section">

        </section>
         <section>
            <h1>Create your teacher profile</h1>
            <p>Join educators sharing what works in their classrooms.</p>
         </section>
       
       <section>

       <form>
        <label>
         Full name
          <input type="text" />
        </label>
        
       </form>

       </section>


        </section>
            </>
    )
}

export default Register;