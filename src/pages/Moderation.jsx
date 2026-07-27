import "../cssfiles/Moderation.css"
import { User } from "lucide-react";
import { db } from "../firebaseConnSetUp";
import { collection,getDocs,query,where , updateDoc,doc} from "firebase/firestore";
import {useEffect, useState } from "react";
import { Check } from "lucide-react";
import {X} from "lucide-react";



function Moderation(){


    const [pendingCount,setPendingCount] = useState(0);
    const [approvedCount,setApprovedCount] = useState(0);
    const [rejectedCount,setRejectedCount] = useState(0);
    const [PendingBooks,setPendingBooks]   = useState([]);
    const [RejectedBooks,setRejectedBooks]   = useState([]);
    const [ApprovedBooks,setApprovedBooks]   = useState([]);
    const [selectedBookState,setSelectedBookState] = useState(null);
    


    //i useEffect becuase i want this to run when moderations runs
    
    useEffect ( function(){
        async function GetBooksApproved(){

        const q = query(collection(db,"books"),
                where("status" ,"==","approved")

            );
        const snapshots = await getDocs(q);
          const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                const date = data.createdAt.toDate();

                const formattedDate =
                    String(date.getDate()).padStart(2, '0') + '-' +
                    String(date.getMonth() + 1).padStart(2, '0') + '-' +
                    date.getFullYear();

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : formattedDate,

                })
            }

        setApprovedBooks(books);
        setApprovedCount(snapshots.size);

        }
        GetBooksApproved()
    },[]);






    function display_approved_book(){
      if(ApprovedBooks.length == 0){
           return(
                <section className="section-no-books">
                <section className="books-check">
                    <Check size={20} color="#8B5A0E" />
                </section>
                <section className="book-headers">
                    <h2>Nothing here</h2>
                    <p>No approved submissions yet.</p>
                </section>
            </section>
           );
         }
            const approved = [];
            for(let i =0;i<ApprovedBooks.length;i++){
                const array_books=ApprovedBooks[i];
                approved.push(
                    <section className="books-section"   key={i}>

                    <section className="book-photo">
                        <img 
                        src={array_books.photo_Url} 
                        alt="Description of the image" 
                        />
                    </section>

                    <section className="subject-grade-date-section">

                     <section className="book-info">

                        <section className="book-subject-grade">
                            <p className="book-subject"
                            
                            style={{
                            backgroundColor: subjectColors[array_books.subject]?.bg || "#E5E5E5",
                            color: subjectColors[array_books.subject]?.text || "#333",
                            }}
                            
                            >{array_books.subject}</p>
                            <p  className="grade-level-books">{array_books.grade}</p>
                        </section>
                        
                         <section className="book_title-author-reason">
                            <h2>{array_books.book_title}</h2>
                            <p>{array_books.author}</p>
                            <p>"{array_books.reason_recommend}"</p>
                        </section>
                    </section>


                    <section className="Date-section">
                        <p >{array_books.Date}</p>
                    </section>

                   
                </section>
               

               

                <section className="buttons-approve-reject">
                
                   <section className="section-already-approved">
                    <Check size={20} color="#047857"  />
                    <button className="Already-approve-button"> Approved</button>
                    </section>


                    <section className="retract-button-section">
                         <button 
                         className="retract-button"
                         onClick={() => updateDoc(doc(db, "books", array_books.id), { status: "rejected" })}
                         >Retract</button>
                    </section>


                    



                   
                </section>
                </section>
                )
                
            
         }

         return approved;
    }




    useEffect ( () =>{
        async function GetBooksRejected(){

            const q = query(collection(db,"books"),
                    where("status" ,"==","rejected")

                );
           const snapshots = await getDocs(q);
           

            const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();
                
                const date = data.createdAt.toDate();

                const formattedDate =
                    String(date.getDate()).padStart(2, '0') + '-' +
                    String(date.getMonth() + 1).padStart(2, '0') + '-' +
                    date.getFullYear();

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : formattedDate,

                })
            }

            setRejectedBooks(books);
            setRejectedCount(snapshots.size);

        }
        GetBooksRejected()
    },[]);






    function display_rejected_books(){
         if(RejectedBooks.length == 0){
           return(
                <section className="section-no-books">
                    <section className="books-check">
                        <Check size={20} color="#8B5A0E" />
                    </section>
                    <section className="book-headers">
                        <h2>Nothing here</h2>
                        <p>No rejected submissions yet.</p>
                    </section>
                </section>
           );
         }
            const rejected = [];
            for(let i =0;i<RejectedBooks.length;i++){
                const array_books=RejectedBooks[i];
                rejected.push(
                    <section className="books-section"   key={i}>

                    <section className="book-photo">
                        <img 
                        src={array_books.photo_Url} 
                        alt="Description of the image" 
                        />
                    </section>

                    <section className="subject-grade-date-section">

                     <section className="book-info">

                        <section className="book-subject-grade">
                            <p className="book-subject"
                            
                            style={{
                            backgroundColor: subjectColors[array_books.subject]?.bg || "#E5E5E5",
                            color: subjectColors[array_books.subject]?.text || "#333",
                            }}
                            
                            >{array_books.subject}</p>
                            <p  className="grade-level-books">{array_books.grade}</p>
                        </section>
                        
                         <section className="book_title-author-reason">
                            <h2>{array_books.book_title}</h2>
                            <p>{array_books.author}</p>
                            <p>"{array_books.reason_recommend}"</p>
                        </section>
                    </section>


                    <section className="Date-section">
                        <p >{array_books.Date}</p>
                    </section>

                   
                </section>
               

               

                <section className="buttons-approve-reject">
                   
                    <section className="section-rejected-rejected">
                        <X size={20} color="#dc2626"  />
                        <button className="Already-reject-button">Rejected</button>
                    </section>

                    <section className="restore-button-section">
                         <button 
                         className="restore-button"
                         onClick={() => updateDoc(doc(db, "books", array_books.id), { status: "approved" })}
                         >Restore</button>
                    </section>
                   
                </section>
                </section>
                )
                
            
         }

         return rejected;
    }



    
    useEffect ( function(){
     async function GetPendingBooks(){
            const q = query(collection(db,"books"),
                    where("status","==","pending")

                );
            const snapshots = await getDocs(q);
           

            const books=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                const date = data.createdAt.toDate();

                const formattedDate =
                    String(date.getDate()).padStart(2, '0') + '-' +
                    String(date.getMonth() + 1).padStart(2, '0') + '-' +
                    date.getFullYear();

                books.push({
                    id: snapshots.docs[i].id, 
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : formattedDate,

                })
            }

            setPendingBooks(books);
            setPendingCount(snapshots.size);

    }
     GetPendingBooks();
    },[])



   
function  display_pending_books(){

         if(PendingBooks.length == 0){
           return(
                <section className="section-no-books">
                <section className="books-check">
                    <Check size={20} color="#8B5A0E" />
                </section>
                <section className="book-headers">
                    <h2>Nothing here</h2>
                    <p>No pending submissions yet.</p>
                </section>
            </section>
           );
         }
            const pending = [];
            for(let i =0;i<PendingBooks.length;i++){
                const array_books=PendingBooks[i];
                pending.push(

                    <section className="books-section"   key={i}>

                    <section className="book-photo">
                        <img 
                        src={array_books.photo_Url} 
                        alt="Description of the image" 
                        />
                    </section>

                    <section className="subject-grade-date-section">

                     <section className="book-info">

                        <section className="book-subject-grade">
                            <p className="book-subject"  style={{
                            backgroundColor: subjectColors[array_books.subject]?.bg || "#E5E5E5",
                            color: subjectColors[array_books.subject]?.text || "#333",
                            }}>{array_books.subject}</p>
                            <p className="grade-level-books">{array_books.grade}</p>
                        </section>
                        
                         <section className="book_title-author-reason">
                            <h2>{array_books.book_title}</h2>
                            <p>{array_books.author}</p>
                            <p>"{array_books.reason_recommend}"</p>
                        </section>
                    </section>


                    <section className="Date-section">
                        <p >{array_books.Date}</p>
                    </section>

                   
                </section>
               

               

                <section className="buttons-approve-reject">
                    

                    <section className="section-pending-approved-button">
                    <Check size={20} color="white"  />
                   

                    <button 
                    className="approve-button" 
                    onClick={() => 
                    updateDoc(doc(db, "books", array_books.id), 
                    { status: "approved" })}
                    >Approve
 
          
                    </button>


                    </section>

            
                    <section className="section-pending-rejected-button">
                        <X size={20} color="#dc2626"  />

                        <button 
                        className="reject-button"
                        onClick={() => 
                        updateDoc(doc(db, "books", array_books.id), 
                        { status: "rejected" })}>
                        Rejected
                        </button>
                        
                    </section>

                    
                </section>
                
                </section>
                )
                
            
         }

         return pending;
    }

    function display_Active_Button_Books(){
        if(selectedBookState === "pending"){
            return display_pending_books();
        }
        if(selectedBookState === "approved"){
            return display_approved_book();
        }
        if(selectedBookState === "rejected"){
            return display_rejected_books();
        }
    }

    const subjectColors={
        "English Literature": { bg: "#FEF3C6", text: "#92620A" },

        "Mathematics": { bg: "#DBEAFE", text: "#1E40AF" },

        "Biology": { bg: "#D1FAE5", text: "#065F46" },

        "Physical Sciences": { bg: "#FCE7F3", text: "#9D174D" },

        "Accounting": { bg: "#CCFBF1", text: "#115E59" },          

        "Geography": { bg: "#ECE7C6", text: "#6B5B0A" },           

        "History": { bg: "#FCE4D6", text: "#9C4221" },             

        "Agriculture": { bg: "#D9F2D0", text: "#2F6B1F" },         

        "Business Studies": { bg: "#E0DEFB", text: "#4338CA" },    

        "Economics": { bg: "#FCEFC7", text: "#946C00" },           

        "Mathematical Literacy": { bg: "#CFFAFE", text: "#0E7490" },
       

    }


    return (
       <section className="Moderation-main-section">
       
        <section  className="moderator-header">
        
        <section className="review-submissions-p">
             <h2>Moderation queue</h2>
             <p>Review teacher submissions before they go public.</p>
        </section>

        <section className="moderator-view-button">
            <button>
                <User className="User-icon"  size={14} />
                Moderator view
            </button>
        </section>

        </section>

        <section className="cards-states-section">
            <section className="pending-card">

              <section className="pending-h2-p">
                <h2>{pendingCount}</h2>
                <p>Pending</p>
                 </section>
               
            </section>
            <section className="approved-card">
               <section className="approved-h2-p">
                 <h2>{approvedCount}</h2>
                 <p>Approved</p>
               </section>
            </section>
            <section className="rejected-card">
                <section className="rejected-h2-p">
                    <h2>{rejectedCount}</h2>
                    <p>Rejected</p>
                </section>
            </section>
        </section>

        <section className="state-section">

          <section className="pending-">
            <button onClick={ function() {setSelectedBookState("pending");}} 
            className={selectedBookState==="pending" ?  "Pending-button active-tab" : "Pending-button"}>Pending</button>
            <span>({pendingCount})</span>
          </section>
   
         
          <section className="approved-">
            <button onClick={ function() {setSelectedBookState("approved");}} 
            className={selectedBookState==="approved" ?  "Approved-button active-tab" : "Approved-button"}>Approved</button>
            <span>({approvedCount})</span>
          </section>

          
        
          <section className="rejected-">
            <button  onClick={ function() {setSelectedBookState("rejected");}} 
            className={selectedBookState==="rejected" ?  "Rejected-button active-tab" : "Rejected-button"}>Rejected</button>
            <span>({rejectedCount})</span>
          </section>

        </section>

        {display_Active_Button_Books()}

       </section>
    )
}

export default Moderation;



