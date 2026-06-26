import "../cssfiles/Moderation.css"
import { User } from "lucide-react";
import { db } from "../firebaseConnSetUp";
import { collection,getDocs,query,where} from "firebase/firestore";
import {useEffect, useState } from "react";
import { Check } from "lucide-react";



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

                books.push({
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : data.createdAt.toDate().toLocaleDateString(),

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
                    <section className="subject-grade-date-section">
                    <section>
                        <p>{array_books.Date}</p>
                    </section>

                    <section>
                        <p>{array_books.subject}</p>
                        <p>{array_books.grade}</p>
                    </section>
                </section>
                <section className="book_title-author-reason">
                    <h2>{array_books.book_title}</h2>
                    <p>{array_books.author}</p>
                    <p>{array_books.reason_recommend}</p>
                </section>

                <section className="book-photo">
                    <img 
                    src={array_books.photo_Url} 
                    alt="Description of the image" 
                    style={{ width: '350px', height: 'auto' }} 
                    />
                </section>

                <section className="buttons-approve-reject">
                    <button className="approve-button">Approve</button>
                    <button className="reject-button">Rejected</button>
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

                books.push({
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : data.createdAt.toDate().toLocaleDateString(),

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
                    <section className="subject-grade-date-section">
                    <section>
                        <p>{array_books.Date}</p>
                    </section>

                    <section>
                        <p>{array_books.subject}</p>
                        <p>{array_books.grade}</p>
                    </section>
                </section>
                <section className="book_title-author-reason">
                    <h2>{array_books.book_title}</h2>
                    <p>{array_books.author}</p>
                    <p>{array_books.reason_recommend}</p>
                </section>

                <section className="book-photo">
                    <img 
                    src={array_books.photo_Url} 
                    alt="Description of the image" 
                    style={{ width: '350px', height: 'auto' }} 
                    />
                </section>

                <section className="buttons-approve-reject">
                    <button className="approve-button">Approve</button>
                    <button className="reject-button">Rejected</button>
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

                books.push({
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : data.createdAt.toDate().toLocaleDateString(),

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
                            <p>{array_books.subject}</p>
                            <p>{array_books.grade}</p>
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
                    <button className="approve-button">Approve</button>
                    <button className="reject-button">Rejected</button>
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
            <button onClick={ function() {setSelectedBookState("pending");}} className="pending-button">Pending</button>
            <span>({pendingCount})</span>
          </section>

          <section className="approved-">
            <button onClick={ function() {setSelectedBookState("approved");}} className="pending-button">Approved</button>
            <span>({approvedCount})</span>
          </section>

          <section className="rejected-">
            <button  onClick={ function() {setSelectedBookState("rejected");}} className="pending-button">Rejected</button>
            <span>({rejectedCount})</span>
          </section>

        </section>

        {display_Active_Button_Books()}

       </section>
    )
}

export default Moderation;