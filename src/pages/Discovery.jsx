import "../cssfiles/Discovery.css"
import { collection,getDocs,or,query,where} from "firebase/firestore";
import { db } from "../firebaseConnSetUp";
import {useEffect, useState } from "react";
import {ArrowRight} from 'lucide-react';
import { BookOpen } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Discovery(){

    const [TeacherCount,setTeacherCount]  = useState(0);
    const [SubjectsCount,setSubjectsCount] = useState(0);
    const [approvedCount,setApprovedCount] = useState(0);
    const [ApprovedBooks,setApprovedBooks]   = useState([]);
    const [BooksCount , setBooksCount]  = useState(0);
    const [selectedSubjectState,setSelectedSubjectState] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGradeState,setSelectedGradeState] = useState(null);
    const [selectedSearchFilter,setselectedSearchFilter] = useState(null);
   
    



   const navigate = useNavigate();

    function GoToRegister(){

    navigate("/Register");
    
   }



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


        useEffect ( function(){

        async function GetBooksApproved(){

        const q = selectedSubjectState


                    ? query(collection(db,"books"),
                            where("status" ,"==","approved"),
                            where("subject" ,"==",selectedSubjectState))

                    :query(collection(db,"books"),
                            where("status" ,"==","approved"),
                        );

        const snapshots = await getDocs(q);
          const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                              

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    

                })
            }

        setApprovedBooks(books);
        setApprovedCount(snapshots.size);
        setLoading(false);

        }
        GetBooksApproved()
    },[selectedSubjectState]);



     useEffect ( function(){

        async function GetBooksApproved_Grades(){

        const q = selectedGradeState

                    ? query(collection(db,"books"),
                            where("status" ,"==","approved"),
                            where("gradeLevel" ,"==",selectedGradeState))

                    :query(collection(db,"books"),
                            where("status" ,"==","approved"),
                        );

        const snapshots = await getDocs(q);
          const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                              

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    

                })
            }

        setApprovedBooks(books);
        setApprovedCount(snapshots.size);
        setLoading(false);
        }
       GetBooksApproved_Grades();
    },[selectedGradeState]);



     useEffect ( function(){

        async function GetBooksApproved_Search(){

        const q =  selectedSearchFilter

                    ? query(collection(db,"books"),
                            where("status" ,"==","approved"),
                            or(
                                where("author","==",selectedSearchFilter),
                                where("bookTitle" ,"==",selectedSearchFilter),
                            )
                        )

                    :query(collection(db,"books"),
                            where("status" ,"==","approved"),
                        );

        const snapshots = await getDocs(q);
          const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                              

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    

                })
            }

        setApprovedBooks(books);
        setApprovedCount(snapshots.size);
        setLoading(false);
        }
        GetBooksApproved_Search();
    },[selectedSearchFilter]);



    function display_books(){
            const approved = [];
            for(let i =0;i<ApprovedBooks.length;i++){
                const array_books=ApprovedBooks[i];
                approved.push(
                    <section className="books-card"   key={i}>

                    <section className="book-photo-discovery">
                        <img 
                        src={array_books.photo_Url} 
                        alt="Description of the image" 
                        />
                    </section>

                
                    <section className="book-subject-grade-discovery">
                                <p className="book-subject-discovery"
                                
                                style={{
                                backgroundColor: subjectColors[array_books.subject]?.bg || "#E5E5E5",
                                color: subjectColors[array_books.subject]?.text || "#333",
                                }}
                                
                                >{array_books.subject}</p>
                                <p  className="grade-level-books-discovery">{array_books.grade}</p>
                    </section>
                        
                    <section className="book_title-author-discovery">
                                <h2>{array_books.book_title}</h2>
                                <p>{array_books.author}</p>
                    </section>
                       
                    <section className="recommend-discovery-section">
                         <p>"{array_books.reason_recommend}"</p>
                    </section>

                    <section className="teacher-info-post">
                        <section className="button_initials-post">
                            <button>
                            JS
                            </button>
                        </section>
                        
                       <section className="teacher-info-preview">
                            <p className="teacher-name">Ms. Jane Smith</p>
                            <p>Your School</p>
                        </section>
                    </section>


                </section>
                )
                
            
         }

         return approved;
    }


    function display_empty_books(){

        if(loading){
             return(
                <section className="No-Books-section">
                    <p>Loading recommendations...</p>
                </section>
        )
        }
       

        if(ApprovedBooks.length == 0){
           return(
                <section className="No-Books-section">
                    <section className="logo-icon-discovery">
                            <BookOpen size={20} />
                    </section>
                    <h2 className="no-books-filter-h2">No books match your filters</h2>
                    <p className="no-books-filter-p">Try adjusting your search or subject selection.</p>
                </section>
           );
         }
    }

    function display_Active_Subject_Books(){
        if(selectedSubjectState === null){
            return display_books();
        }
        else{
            //return the filtered fetch
            return display_books();
        }
    }

    
    function CountRecommendations(){
        if(approvedCount < 2){
            return(  
            <section className="recommendations-count">
                <p>{approvedCount} recommendation</p>
            </section>
            )
          
            
        }
        else{
             
            return(
                <section className="recommendations-count">
                <p>{approvedCount} recommendations</p>
            </section>
            )
            
        }
    }


    const subjectColors={
        "Home Language": { bg: "#FEF3C6", text: "#92620A" },

        "Mathematics": { bg: "#DBEAFE", text: "#1E40AF" },

        "Life science(Biology)": { bg: "#D1FAE5", text: "#065F46" },

        "Physical Sciences": { bg: "#FCE7F3", text: "#9D174D" },

        "Accounting": { bg: "#CCFBF1", text: "#115E59" },          

        "Geography": { bg: "#ECE7C6", text: "#6B5B0A" },           

        "History": { bg: "#FCE4D6", text: "#9C4221" },             

        "Agriculture": { bg: "#D9F2D0", text: "#2F6B1F" },         

        "Business Studies": { bg: "#E0DEFB", text: "#4338CA" },    

        "Economics": { bg: "#FCEFC7", text: "#946C00" },           

        "Mathematical Literacy": { bg: "#CFFAFE", text: "#0E7490" },
       

    }



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
                <button

                onClick={ function(){ document.getElementById("Discovery-books").scrollIntoView({behavior:"smooth"})     }    }
                
                 className="Browse-button">Browse recommendations


                 </button>
            </section>

            <section className="Contributor-button-section">
                 
                <button

                onClick={ function(){GoToRegister()}}

                className="Contributor-button">Become a contributor</button>
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
                        

                          
                        value={selectedSearchFilter}
                        onChange={function(e){setselectedSearchFilter(e.target.value)}}



                     />
                </section>

                <section className="grades-options">

                    <select id="subjects" className="subjects-grades_options-discovery"
                
                    onChange={function(e) { setSelectedGradeState(e.target.value || null); }}

                    >
                    <option value="">All grades</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                 </select>

                </section>
        
               </section>

               <section className="button-filters">
                       <button 
                       
                        onClick={function(){
                                setSelectedSubjectState(null)
                            }}

                        className={selectedSubjectState === null ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                        All subjects
                       </button>

                       <button 

                        onClick={function(){
                            setSelectedSubjectState("Mathematics")
                        }}

                        className={selectedSubjectState === "Mathematics" ? "subject_name-discovery active-subject" : "subject_name-discovery"}
                        >

                        Mathematics

                       </button>


                       <button
                       
                        onClick={function(){
                            setSelectedSubjectState("Physical Science")
                        }}

                        className={selectedSubjectState === "Physical Science" ? "subject_name-discovery active-subject" : "subject_name-discovery"}
                        >

                       Physical Science

                       </button>

                       <button

                       onClick={function(){
                            setSelectedSubjectState("Accounting")
                        }}

                        
                        className={selectedSubjectState === "Accounting" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >

                        Accounting
                       </button>


                       <button

                       onClick={function(){
                            setSelectedSubjectState("Life Sciences (Biology)")
                        }}

                        className={selectedSubjectState === "Life Sciences (Biology)" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                        Life Sciences (Biology)

                       </button>

                       <button  

                       onClick={function(){
                            setSelectedSubjectState("Geography")
                        }}

                        className={selectedSubjectState === "Geography" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                          Geography
                       </button>


                       <button

                       onClick={function(){
                            setSelectedSubjectState("History")
                        }}

                        className={selectedSubjectState === "History" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                          History
                       </button>

                       <button  

                       onClick={function(){
                            setSelectedSubjectState("Mathematics Literacy")
                        }}

                        className={selectedSubjectState === "Mathematical Literacy" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                         Mathematical Literacy
                       </button>

                       <button 

                       onClick={function(){
                            setSelectedSubjectState("Agricultural science")
                        }}

                        className={selectedSubjectState === "Agricultural science" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                        Agricultural science
                       </button>


                       <button

                       onClick={function(){
                            setSelectedSubjectState("Business Studies")
                        }}

                        className={selectedSubjectState === "Business Studies" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                         Business Studies
                       </button>

                       <button 
                       onClick={function(){
                            setSelectedSubjectState("Economics")
                        }}

                        className={selectedSubjectState === "Economics" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                          Economics
                       </button>


                        <button 
                       onClick={function(){
                            setSelectedSubjectState("Home Language")
                        }}

                        className={selectedSubjectState === "Home Language" ? "subject_name-discovery active-subject" : "subject_name-discovery"}

                        >
                         Home Language
                       </button>

                       
                       
               </section>
        </section>


        <section id="Discovery-books" className="Discovery-recommendation-books">

       <section>
        {CountRecommendations()}
       </section>

      
        <section id="Discovery-books" className="Discovery-recommendation-books">
        

         <section   id="all-books-grid"  className="books-grid-discovery">
            {display_Active_Subject_Books()}
        </section>

         <section>
            {display_empty_books()}
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
                 <button 
                 
                 onClick={ function(){GoToRegister()}}

                 className="Register-button">Register as a teacher
                    
                 </button>
                
            </section>

          

        </section>


        </section>
        
       
        
    )
   
}

export default Discovery;