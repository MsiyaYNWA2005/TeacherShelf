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

       </section>
    )
}

export default Moderation;