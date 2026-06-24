import "../cssfiles/PostBook.css"
import { db } from "../firebaseConnSetUp";
import { collection, addDoc } from "firebase/firestore";

import { useState } from "react";
import { Link } from "react-router-dom";


function PostBook(){
    return (
        <section className="post-book-main-section">
            <section className="post-section">
                <section className="topic-section">
                    <h2 className="post-book-topic">Share a book recommendation</h2>
                    <p>Your post will be reviewed by a moderator before going live</p>
                </section>
                <section>
                    <form className="form-section">

                     <section className="form-group">
                        <label
                        className="label-input">
                        Book title
                        </label>
                        <input
                        // value={}
                        type="text"
                        placeholder="e.g To Kill a MockBird"
                        className="input-box"
                        // onChange={(e) =>setFullName(e.target.value)}
                        />
                    
                    </section>


                      <section className="form-group">
                        <label
                        className="label-input">
                        Author
                        </label>
                        <input
                        // value={}
                        type="text"
                        placeholder="e.g Harper Lee"
                        className="input-box"
                        // onChange={(e) =>setFullName(e.target.value)}
                        />
                    
                    </section>

                    <section className="subject-grade-section">
        
                         <section className="subjects-grades-section">
                            <label htmlFor="subjects" className="label-input">
                             Subjects
                            </label>

                            <select id="subjects" className="subjects_and_grades_options">
                                <option value="">Select subject</option>
                                <option value="Home Language">Home Language</option>
                                <option value="History">History</option>
                                <option value="Life science(Biology)">Life science(Biology)</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Mathematics Literacy">Mathematics Literacy</option>
                                <option value="Physical Sciences">Physical Sciences</option>
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

                             <select id="subjects" className="subjects_and_grades_options">
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
                            placeholder="Describe why this book work in your classroom.What do students take away from it"
                            className="input-recommend"
                            rows={4}
                        />
                    </section>


                     <section className="photo-input">
                        <label className="label-input">Book photo (optional)</label>
                        <input 

                            type="url"
                            id="photoUrl"
                            placeholder="Paste an image Link(e.g from Google Boook)"
                            className="input-recommend-photo"
                            // value={photoUrl}
                            // onChange={(e) =>setPhotoUrl(e.target.value)}
                        />
                    </section>

                

                    </form>
                   
                     <button className="submit-for-review"   type="button">Submit for review</button>
                </section>
               
            </section>
            <section className="preview-section">
                <section className="preview-topic">
                    <h2 className="preview-h2-1">LIVE PREVIEW</h2>
                    <section className="preview-card">
                        {/* <img src={} alt={title} className="book-photo" /> */}
                        <span className="subject-badge">Subject</span>
                        <p className="grade-level">Grade Level</p>
                        <h3 className="book-title">Book Title</h3>
                        <p className="author-name">Author Name</p>
                        <blockquote className="reason-quote">“Your reason for recommending this book will appear here.”</blockquote>
                        <section className="teacher-info">
                        <section className="button_initials">
                            <button>
                            JS
                            </button>
                        </section>
                        
                       <section className="teacher-info-preview">
                            <h2>Ms. Jane Smith</h2>

                            <p>Your School</p>
                        </section>
                        </section>
                        <p className="moderation-note">Reviewed by a moderator before going live.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default PostBook;