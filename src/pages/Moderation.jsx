import "../cssfiles/Moderation.css"
import { User } from "lucide-react";



function Moderation(){
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
                <h2>N0.</h2>
                <p>Pending</p>
                 </section>
               
            </section>
            <section className="approved-card">
               <section className="approved-h2-p">
                 <h2>N0.</h2>
                <p>Approved</p>
               </section>
            </section>
            <section className="rejected-card">
                <section className="rejected-h2-p">
                    <h2>N0.</h2>
                    <p>Rejected</p>
                </section>
            </section>
        </section>

       </section>
    )
}

export default Moderation;