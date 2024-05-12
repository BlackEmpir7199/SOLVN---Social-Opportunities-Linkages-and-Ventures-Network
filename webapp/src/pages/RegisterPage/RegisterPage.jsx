import React, { useState } from "react";

import { Link } from "react-router-dom";

import './RegisterPage.css';

export default function RegisterPage() {
    const [isRegisterInvClicked, setIsRegisterInvClicked] = useState(false);
    const [isRegisterProjClicked, setIsRegisterProjClicked] = useState(false);

    const [invFormData, setInvFormData] = useState({
        invAppName: '',
        invAppOwner: '',
        invAppLink: '',
        invSubscription: '',
        invGetProjectsApi: '',
        invPostDetailsApi: '',
        invPostProjectsApi: ''
    });

    function onTextFieldChange(e) {
        setIsRegisterInvClicked(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function onSubmit(event) {
        event.preventDefault();
        setTimeout(() => {
            window.alert('Submitted successflly!')
        }, 3000);
    }

    return(
        <div className="register-page">
            <h1>Select your Role to register!</h1>
            <div className="select-register-role">
                <Link onClick={() => setIsRegisterInvClicked(prev => !prev)} className="select-role-card">
                    <div className="role-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                    </div>
                    <div className="role-text-container">
                        Investor App
                    </div>
                </Link>
                <Link onClick={() => setIsRegisterProjClicked(prev => !prev)} className="select-role-card">
                    <div className="role-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    </div>
                    <div className="role-text-container">
                        Project App
                    </div>
                </Link>
            </div>
            <Link className="already-have-account">
                Already have an account?
            </Link>
            <div className={`overlay ${isRegisterInvClicked || isRegisterProjClicked ? 'active': ''}`}></div>
            <div className={`regitser-pop-up investor-app-register ${isRegisterInvClicked? 'active': ''}`}>
                <h2>Enter the following details!</h2>
                <button onClick={() => setIsRegisterInvClicked(prev => !prev)} className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <form onSubmit={onSubmit}>
                    <input onChange={onTextFieldChange}  placeholder="Investor app name" type="text" name="invAppName" className="ip" />
                    <input onChange={onTextFieldChange}  placeholder="Investor App Owner" type="text" className="ip" name="invAppOwner"/>
                    <input onChange={onTextFieldChange}  placeholder="Investor App Link" type="text" className="ip" name="invAppLink" />
                    <select onChange={onTextFieldChange} name="invSubscription" id="subs">
                        <option value="free">Free</option>
                        <option value="premium">Premium</option>
                    </select>
                    <input onChange={onTextFieldChange}  placeholder="Investor get projects Api" type="text" className="ip" name="investorGetProjectsApi" />
                    <input onChange={onTextFieldChange}  placeholder="Investor Post Details Api" type="text" className="ip" name="investorPostDetailsApi" />
                    <input onChange={onTextFieldChange}  placeholder="Post Projects Api" type="text" className="ip" name="postProjectsApi" />

                    <button>SUBMIT</button>
                </form>
            </div>
            <div className= {`regitser-pop-up project-app-register ${isRegisterProjClicked? 'active': ''}`}>
                <h2>Enter the following details!</h2>
                <button className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <button onClick={() => setIsRegisterProjClicked(prev => !prev)} className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <form onSubmit={onSubmit}>
                    <input onChange={onTextFieldChange}  placeholder="Project app name" type="text" name="projAppName" className="ip" />
                    <input onChange={onTextFieldChange}  placeholder="Project App Owner" type="text" className="ip" name="projAppOwner"/>
                    <input onChange={onTextFieldChange}  placeholder="Project App Link" type="text" className="ip" name="projAppLink" />
                    <select onChange={onTextFieldChange} name="projSubscription" id="subs">
                        <option value="free">Free</option>
                        <option value="premium">Premium</option>
                    </select>
                    <input onChange={onTextFieldChange}  placeholder="Project get projects Api" type="text" className="ip" name="investorGetProjectsApi" />
                    <input onChange={onTextFieldChange}  placeholder="Project Post prpjects Api" type="text" className="ip" name="investorPostDetailsApi" />
                    {/* <input onChange={onTextFieldChange}  placeholder="Post Projects Api" type="text" className="ip" name="postProjectsApi" /> */}

                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}