import "../cssfiles/Discovery.css"
import { collection,getDocs,query} from "firebase/firestore";
import { db } from "../firebaseConnSetUp";
import {useEffect, useState } from "react";



function Discovery(){

    const [TeacherCount,setTeacherCount]  = useState(0);
    const [SubjectsCount,setSubjectsCount] = useState(0);
    const [BooksCount , setBooksCount]  = useState(0);



    useEffect ( function(){

        async function GetTeacherCount(){
    
            const q = query(collection(db,"teachers")
                );
            const snapshots = await getDocs(q);
             
            setTeacherCount(snapshots.size);
    
        }
         GetTeacherCount();
    
        },[])


    useEffect ( function(){

         async function GetBooksCount(){
    
            const q = query(collection(db,"books")
                );
            const snapshots = await getDocs(q);
             
            setSubjectsCount(snapshots.size);
         
    
        }
        GetBooksCount()
        },[])


    useEffect ( function(){

         async function GetSubjectsCount(){
    
            const q = query(collection(db,"teachers")
                );
            const snapshots = await getDocs(q);

            const allSubjects = new Set();

            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();
                
                for(let j=0;j<data.subjects.length;j++){
                    allSubjects.add(data.subjects[j]);
                }
            }

             
            setBooksCount(allSubjects.size);
         
    
        }

        GetSubjectsCount()
        
        },[])



    

        

    


    return(

        <section className="Discovery-main-section">




        <section className="Discovery-header">

          <section className="Teacher-motive">
           
              <p className="For-teachers-p">For teachers, by teachers</p>

           </section>
           

          <section className="hero-section">
               <h1 className="hero-title">Teaching wisdom, finally searchable.</h1>
          </section>

          <section className="browse-quote">
            <p>
                Browse book recommendations from real classroom teachers <br />
                — filtered by subject and grade level. No algorithm, no ads. <br />
                Just what’s working.
            </p>
          </section>

          <section className="Browse-Contributor-Buttons">
            <button className="Browse-button">Browse recommendations</button>
            <button className="Contributor-button">Become a contributor</button>
          </section>

          <section className="insights-section">

          <section className="Books-insights">
             <h2 className="insights-h2">{BooksCount}</h2>
             <p  className="insights-p">Books shared</p>
          </section>

          <section className="Teacher-insights">
             <h2 className="insights-h2">{TeacherCount}</h2>
             <p  className="insights-p">Books shared</p>
          </section>

          <section className="Subjects-insights">
             <h2 className="insights-h2">{SubjectsCount()}</h2>
             <p  className="insights-p">Books shared</p>
          </section>
           
          </section>
        </section>
        
        </section>
        
    )
   
}

export default Discovery;