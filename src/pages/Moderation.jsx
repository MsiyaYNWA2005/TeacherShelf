import "../cssfiles/Moderation.css"
import { User } from "lucide-react";
import { db } from "../firebaseConnSetUp";
import { collection,getDocs,query,where} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";



function Moderation(){


    const [pendingCount,setpendingCount] = useState(0);
    const [approvedCount,setapprovedCount] = useState(0);
    const [rejectedCount,setrejectedCount] = useState(0);




    //i useEffect becuase i want this to run when moderations runs
    useEffect ( function(){
        async function GetBooksPending(){

            const q = query(collection(db,"books"),
                    where("status","==","pending")

                );
            const snapshots = await getDocs(q);
            setpendingCount(snapshots.size);
        }
        GetBooksPending()
    },[]);



    useEffect ( function(){
        async function GetBooksApproved(){

        const q = query(collection(db,"books"),
                where("status" ,"==","approved")

            );
        const snapshots = await getDocs(q);
        setapprovedCount(snapshots.size);

        }
        GetBooksApproved()
    },[]);






    useEffect ( () =>{
        async function GetBooksRejected(){

            const q = query(collection(db,"books"),
                    where("status" ,"==","rejected")

                );
            const snapshots = await getDocs(q);
            setrejectedCount(snapshots.size);

        }
        GetBooksRejected()
    },[]);

    async function GetPendingBooks(){
            const q = query(collection(db,"books"),
                    where("status","==","pending")

                );
            const snapshots = await getDocs(q);

            const books_pending=[];


            for(let i =0;i<snapshots.size;i++){
                const data = snapshots.docs[i].data();

                books_pending.push({
                    author:data.author,
                    book_title:data.bookTitle,
                    grade:data.gradeLevel,
                    subject :data.subject,
                    reason_recommend:data.reason,
                    photo_Url:data.photoURL,
                    Date : data.createdAt

                })
            }

            return books_pending;

    }

    async function  display_pending_book(){

         const array_pending= await GetPendingBooks();

         if(array_pending.length == 0){
            <section className="section_pending_no_books">
                <section>
                    <Check size={20} color="#8B5A0E" />
                </section>
                <section>
                    <h2>Nothing here</h2>
                    <p>No rejected submissions yet.</p>
                </section>
            </section>
         }
        <section className="penging_books_main_section"></section>
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
            <button className="pending-button">Pending</button>
            <span>({pendingCount})</span>
          </section>

          <section className="approved-">
            <button className="pending-button">Approved</button>
            <span>({approvedCount})</span>
          </section>

          <section className="rejected-">
            <button className="pending-button">Rejected</button>
            <span>({rejectedCount})</span>
          </section>

        </section>

       </section>
    )
}

export default Moderation;