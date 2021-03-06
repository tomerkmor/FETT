import NavBar from "../components/NavBar"
import AuthModal from "../components/AuthModal"
import { useState } from 'react'


const Home = () => {

    const [showModal, setShowModal] = useState(false); {/* home page: show the login / registery form */ }
    const [authToken, setAuthToken] = useState(false); {/* is used to display the navbar and the create account*/ }
    const [isSignUp, setIsSignUp] = useState(true); {/* we assume that the user is not registered */ }

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }


    return (
        <div>
        <div className="overlay">
            {/* logo , setShowModal , showModal , setIsSignUp */}
            <NavBar logo={true}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />


            <div className="home">
                <h2 className="primary-title">
                    Connect and Meet
                </h2>
                <h4><a href="onboarding">onboarding</a></h4>
                <h4><a href="dashboard">dashboard</a></h4>
                <button className={"primary-button"} onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </div>
        </div>

            <div class="second-part">
                <div class="row tm-content-box">

                    <div class="col-lg-12 col-xl-12">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4 tm-section-title">What We Do</h2>
                            <p class="mb-4 tm-intro-text">
                                FET is a free online chat and meeting up website that allows users to socialize with others.
                                Discovering new personalities, hobbies, bonds and ways of having fun. <br />
                                This service finds you a pair that matches your interest in one-on-one chat session that might progress
                                into a real in-life meeting.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row tm-content-box">

                    <div class="col-lg-1">
                        <i class="fa-solid fa-3x fa-fire-flame-curved text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Plan a date</h2>
                            <p class="mb-4 tm-intro-text">
                                Come up with an awesome date night idea, some simple picnic or even go for a slow walk in the beach together.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="far fa-3x fa-solid fa-dumbbell text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Find a Workout partner</h2>
                            <p class="mb-4 tm-intro-text">
                                Go outside, Duo up with somebody and train harder together.
                            </p>
                        </div>
                    </div>

                </div>



                <div class="row tm-content-box">

                    <div class="col-lg-1">
                        <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Get an honest opinion from a stranger</h2>
                            <p class="mb-4 tm-intro-text">
                                Want to get another perspective on a specific subject? clothing? hair-cut?
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Discreet Chat</h2>
                            <p class="mb-4 tm-intro-text">
                                Sometimes unloading or listening to the problems of others can do wonders..
                            </p>
                        </div>
                    </div>

                </div>

                <div class="row tm-content-box">

                    <div class="col-lg-1">
                        <i class="fa-solid fa-3x fa-book text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Studying Partner</h2>
                            <p class="mb-4 tm-intro-text">
                                Need a helping hand in summarizing your material? or maybe practice some methods with others?
                            </p>

                        </div>
                    </div>

                    <div class="col-lg-1">
                        <i class="fas fa-3x fa-users text-center tm-icon"></i>
                    </div>
                    <div class="col-lg-5">
                        <div class="tm-intro-text-container">
                            <h2 class="tm-text-primary mb-4">Expanding the circle of friends</h2>
                            <p class="mb-4 tm-intro-text">
                                Who knows.. maybe you will find common interest with group of people and strengthen your relationship with
                                them.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Home