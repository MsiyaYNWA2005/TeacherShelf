import "../cssfiles/PostBook.css"
import { db } from "../firebaseConnSetUp";
import { collection, addDoc } from "firebase/firestore";
import {Clock} from "lucide-react";

import { useState } from "react";





function PostBook(){

   
    const [BookTitle,setBookTitle] = useState("");
    const [AuthorName,setAuthorName] = useState("");
    const [photoUrl_Google,setphotoUrl_Google]  = useState("");
    const [recommend_text,setrecommend_text]  = useState("");
    const [subject,setSubject] = useState("");
    const [grade,setGrade] = useState("");



    async function PostBook_Teacher(){
        if(BookTitle != ""  && AuthorName != ""  && photoUrl_Google != ""  && recommend_text != ""){
            try{
                await addDoc(collection(db ,"books"),{
                    // teacherId: auth.currentUser.uid,
                    bookTitle: BookTitle,
                    author: AuthorName,
                    subject: subject,
                    gradeLevel: grade,
                    reason: recommend_text,
                    photoURL: photoUrl_Google,
                    status: "pending",         
                    createdAt: new Date(),
                })

            
                setBookTitle("");
                setAuthorName("");
                setrecommend_text("");
                setphotoUrl_Google("");
                setSubject("");
                setGrade("");

            alert("book saved successfully!");
            }
            catch(error){
                console.error("Error saving Book :", error);
                alert("Failed to save book. Check the console.");
            }
        }
    }

    

 



    return (
        <section className="post-book-main-section">
            <section className="post-section">
                <section className="topic-section">
                    <h2 className="post-book-topic">Share a book recommendation</h2>
                    <p>Your post will be reviewed by a moderator before going live</p>
                </section>
                <section>
                    <form      className="form-section">

                     <section className="form-group">
                        <label
                        className="label-input">
                        Book title
                        </label>
                        <input
                        value={BookTitle}
                        type="text"
                        placeholder="e.g To Kill a MockBird"
                        className="input-box"
                        onChange={(e) =>setBookTitle(e.target.value)}
                        />
                    
                    </section>


                      <section className="form-group">
                        <label
                        className="label-input">
                        Author
                        </label>
                        <input
                        value={AuthorName}
                        type="text"
                        placeholder="e.g Harper Lee"
                        className="input-box"
                        onChange={(e) =>setAuthorName(e.target.value)}
                        />
                    
                    </section>

                    <section className="subject-grade-section">
        
                         <section className="subjects-grades-section">
                            <label htmlFor="subjects" className="label-input">
                             Subjects
                            </label>
                            <select id="subjects" className="subjects_and_grades_options"  value={subject} onChange={(e) =>setSubject(e.target.value)}>
                                <option value="">Select subject</option>
                                <option value="Home Language">Home Language</option>
                                <option value="History">History</option>
                                <option value="Life Sciences (Biology)">Life science(Biology)</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Mathematics Literacy">Mathematics Literacy</option>
                                <option value="Physical Science">Physical Science</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Business Studies">Business Studies</option>
                                <option value="Economics">Economics</option>
                                <option value="Geography">Geography</option>
                                <option value="Agricultural science">Agricultural science</option>
                            </select>
                        </section>
                        <section className="subjects-grades-section">
                            <label htmlFor="grades" className="label-input">
                             Grade level
                            </label>

                             <select id="subjects" className="subjects_and_grades_options" value={grade} onChange={(e) =>setGrade(e.target.value)}>
                                <option value="">Select grade</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 10">Grade 10</option>
                                <option value="Grade 11">Grade 11</option>
                                <option value="Grade 12">Grade 12</option>
                            </select>
                       </section>
                    </section>

                    <section className="why-recommending-book-section">

                        <section className="recommend"><label className="label-input">Why does this book help?</label><span> 0/280</span></section>
                        <textarea
                            value={recommend_text}
                            placeholder="Describe why this book work in your classroom.What do students take away from it"
                            className="input-recommend"
                            onChange={(e)=>setrecommend_text(e.target.value)}
                            rows={4}
                            maxLength={100}
                        />
                    </section>


                     <section className="photo-input">
                        <section className="recommend" ><label className="label-input">Book photo</label> <span>(Google Url)</span></section>
                        <input 
                            type="url"
                            value={photoUrl_Google}
                            id="photoUrl_"
                            placeholder="Paste an image Link(e.g from Google Boook)"
                            className="input-recommend-photo"
                            onChange={(e)=>setphotoUrl_Google(e.target.value)}
                        />
                    </section>

                

                    </form>
                   
                     <button   onClick={PostBook_Teacher}   className="submit-for-review"   type="button">Submit for review</button>
                </section>
               
            </section>
            <section className="preview-section">
                <section className="preview-topic">
                    <h2 className="preview-h2-1">LIVE PREVIEW</h2>
                    <section className="preview-card">
                        
                        
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bookshelf" className="banner-photo" />
                        <section className="subject-grade-section">
                            <span className="subject-badge">Subject</span>
                            <span className="grade-level">Grade Level</span>
                        </section>
                        <section className="Book_title_author">
                            <h3 className="book-title">Book Title</h3>
                            <p className="author-name">Author Name</p>
                        </section>
                        
                        <section className="recommend-preview">
                            <blockquote className="reason-quote">“Your reason for recommending this book will appear here.”</blockquote>
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
                </section>
                <section className="moderation-note-clock-section">
                    <div className="logo-icon-clock">
                            <Clock size={20} />
                        </div>
                <p className="moderation-note">Reviewed by a moderator before going live.</p>
                </section>
                
            </section>
        </section>
    )
}

export default PostBook;