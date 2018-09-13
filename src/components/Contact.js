import React from "react";
import dataBase from "../firebase/firebase"
import { Link } from "react-router-dom";

export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            budget: 0,
            deadline: "",
            about: "",
            error: "",
            submited: false
        }
    }
    onNameChange = (e)=>{
        const name = e.target.value
        this.setState(()=>({
            name
        }))
    }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({
            email
        }))
    }
    onBudgetChange = (e)=>{
        const budget = e.target.value
        this.setState(()=>({
            budget
        }))
    }
    onDeadlineChange = (e)=>{
        const deadline = e.target.value
        this.setState(()=>({
            deadline
        }))
    }
    onAboutChange = (e) => {
        const about = e.target.value
        this.setState(() => ({
            about
        }))
    }
    onSubmit = (e)=> {
        if (!this.state.name || !this.state.email) {
            e.preventDefault()
            this.setState(()=>({
                error: "Please provide your name and email",
                submited: false
            }))
        } else {
            this.setState(() => ({
                error: "",
                submited: true
            }))
            dataBase.ref().push({
                name: this.state.name,
                email: this.state.email,
                budget: this.state.budget,
                deadline: this.state.deadline,
                about: this.state.about
            })
        }
    }
    render() {
        if (this.state.submited) {
            return (
                <div className="contact">
                    <div className="content-container">
                        <div className="about-links content-container">
                            <Link className="link" to="/portfolio">&#60;Projects&#62;</Link>
                            <Link className="link" to="/">&#60;About me&#62;</Link>
                        </div>
                        <h1 className="content-container contact-title">&#62;_Contact</h1>
                        <p className="content-container contact-message">Thank you for have interest in my work. I will contact you as soon as posible. While you can check my projects :)</p>
                        <img  src="images/thumbs.jpeg" alt="Juan Rojas"></img>  
                    </div>
                </div>
            ) 
        } else {
            return (
                <div className="contact">
                    <div className="content-container">
                        <div className="about-links content-container">
                            <Link className="link" to="/portfolio">&#60;Projects&#62;</Link>
                            <Link className="link" to="/">&#60;About me&#62;</Link>
                        </div>
                        
                        <h1 className="content-container contact-title">&#62;_Contact</h1>
                        <p className="content-container contact-message">Feel free to contact me using the next form or sending me an email to jsrojasn91@gmail.com, i will contact you soon.</p>
                        <form onSubmit={this.onSubmit} >
                            <p className="content-container error">{this.state.error}</p>
                            <fieldset>
                                <legend>Your Info</legend>

                                <label for="name">Name:</label>
                                <input type="text" value={this.state.name} onChange={this.onNameChange} autofocus></input>

                                <label for="mail">Email:</label>
                                <input type="email" value={this.state.email} onChange={this.onEmailChange}></input>
                            </fieldset>
                            <fieldset>
                                <legend>Info of your project</legend>

                                <label for="budget">What is your budget? (USD)</label>
                                <input type="text" value={this.state.budget} onChange={this.onBudgetChange}></input>

                                <label for="deadline">What is your deadline for finishing this project?</label>
                                <input type="text" value={this.state.deadline} onChange={this.onDeadlineChange}></input>

                                <label for="about">Tell me about the project</label>
                                <input type="text" value={this.state.about} onChange={this.onAboutChange}></input>
                            </fieldset>
                            <div className="contact-button">
                                <button>Contact Me :)</button>
                            </div>

                        </form>
                    </div>
                </div>
            )
        }
        
    }

}
    
