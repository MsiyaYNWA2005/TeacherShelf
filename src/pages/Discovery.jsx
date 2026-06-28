import "../cssfiles/Discovery.css"
import { collection,getDocs,query} from "firebase/firestore";
import { db } from "../firebaseConnSetUp";
import {useEffect, useState } from "react";
import {ArrowRight} from 'lucide-react';
import { BookOpen } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from 'lucide-react';



function AddSubjects({value,onClick,className}){
    return(
       <button type="button" 
       className={className} 
       onClick={onClick}>
       {value}</button>
    )
}


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
            

            <section className="Browse-button-section">
                <button className="Browse-button">Browse recommendations</button>
            </section>
            <section className="Contributor-button-section">
                 
                 <button className="Contributor-button">Become a contributor</button>
                 <ArrowRight size={20} color="white" />
            </section>
          </section>

          <section className="insights-section">

            <section className="Books-insights">
                <h2 className="insights-h2">{BooksCount}</h2>
                <p  className="insights-p">Books shared</p>
            </section>

            <section className="Teacher-insights">
                <h2 className="insights-h2">{TeacherCount}</h2>
                <p  className="insights-p">Teachers</p>
            </section>

            <section className="Subjects-insights">
                <h2 className="insights-h2">{SubjectsCount}</h2>
                <p  className="insights-p">Subjects</p>
            </section>
           
          </section>
        </section>


        <section className="filters-section">
               <section className="search_input-grades">
                 <section className="search_input_and_search">
                     <Search  size={20} color="black"/>
                     <input
                        className="search-input"
                        placeholder="Search by title ,author, or teacher"
                     />
                </section>

                <section className="grades-options">
                    <select id="subjects" className="subjects-grades_options-discovery">
                    <option value="">All grades</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                 </select>

                </section>
        
               </section>

               <section className="button-filters">
                       <AddSubjects className="subject_name-discovery-all" value="All subjects"/>
                       <AddSubjects className="subject_name-discovery" value="Mathematics"/>
                        
                        <AddSubjects className="subject_name-discovery" value="Physical Science"/>
                        <AddSubjects className="subject_name-discovery" value="Accounting"  />
                        <AddSubjects className="subject_name-discovery" value="Life Sciences (Biology)" />
                        <AddSubjects className="subject_name-discovery" value="Geography"/>
                       
                        <AddSubjects className="subject_name-discovery" value="History" />
                        <AddSubjects className="subject_name-discovery" value="Mathematical Literacy"/>
                        <AddSubjects className="subject_name-discovery" value="Agriculture" />
                        <AddSubjects className="subject_name-discovery" value="Business studies" />
                        <AddSubjects className="subject_name-discovery" value="Economics"/>
               </section>
        </section>


        <section className="Discovery-recommendation-books">

        <section className="recommendations-count">
            <p>"{"number"}" recommendations</p>
         </section>

        <section className="books-grid">
                <section className="No-Books-section">
                    <section className="logo-icon-discovery">
                            <BookOpen size={20} />
                    </section>
                    <h2 className="no-books-filter-h2">No books match your filters</h2>
                    <p className="no-books-filter-p">Try adjusting your search or subject selection.</p>
                </section>
        </section>
       



        </section>

        <section className="discovery-bottom-section">
            <section className="bottom-discovery-quotes">
                <h2>Do you teach this?</h2>
                <p>Share a book that works in your classroom.</p>
            </section>
            
            <section className="Register-button-section">
                 
                 <Plus size={16} color="white" />
                 <button className="Register-button">Become a contributor</button>
                
            
            </section>
        </section>

           


        </section>
        
       
        
    )
   
}

export default Discovery;