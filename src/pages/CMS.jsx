import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import imgEvent from "../assets/img/ticket-icon.png";
import Modal from "react-bootstrap/Modal";

const Cms = () => {
    // State to store time remaining
    const { id } = useParams();
    useEffect(() => {
        fetchData()
    }, [id])

    const [content, setContent] = useState('')
    const [votingEmail, setVotingEmail] = useState()
    const [votePopup, setVotePopup] = useState(false)
    const [reSendOtp, setResendOtp] = useState(false);
    const [otp, setOtp] = useState();
    const [timer, setTimer] = useState(300); // 5 minutes = 300 seconds
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        let interval;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(interval);
            setIsTimerActive(false); // Stop the timer once it reaches 0
        }
        return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const handleSendOtp = () => {
        setTimer(300); // Reset timer to 5 minutes
        setIsTimerActive(true); // Start timer
        handleClick("sendOtp", null); // Trigger OTP send logic
    };

    const handleResendOtp = () => {
        setTimer(300); // Reset timer to 5 minutes
        setIsTimerActive(true); // Start timer
        handleClick("resendOtp", null); // Trigger resend OTP logic
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/startup-cms/get-content/${id}`)
            console.log(res)
            if (res.status === 200) {
                setContent(res.data)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    // const handleClick = async () => {
    //     console.log("ggg", id)
    //     try{
    //         const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/update-vote/StartUpDetailsMaster/${id}`)
    //         console.log("ppop",res)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    const handleClick = async (type, otp) => {
        console.log("Handling request for:", type);

        const email = votingEmail;

        try {
            let res;
            switch (type) {
                case 'sendOtp':
                    // API call to send OTP
                    res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/send-otp/AwardVoting`, { email });
                    // console.log("hhh",res);
                    if(res.data.isOk){
                        alert("OTP sent successfully.");
                        setResendOtp(true);
                    }
                    else if (res.data.error == "Email already exists."){
                        alert("Your vote has already been recorded!");
                        setResendOtp(false);
                    }else{
                        alert("Something went wrong. Please try again.")
                        setResendOtp(false);
                    }
                    console.log("OTP sent:", res.data);
                    break;

                case 'resendOtp':
                    res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/resend-otp/AwardVoting`, { email });
                    // console.log("OTP resent:", res.data);
                    if(res.data.isOk){
                        alert(res.data.msg)
                    }
                    break;

                case 'verifyOtp':
                    if (!otp) {
                        alert("OTP is required for verification");
                        return;
                    }

                    try {
                        res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/verify-otp/AwardVoting`, { email, otp, id });
                        // console.log("OTP verification response:", res.data);
                        if (res.data.isOk) {
                            alert("OTP verification successful.");
                            window.location.reload();
                        } else {
                            alert("OTP verification failed. Please try again.");
                        }

                    } catch (err) {
                        console.error("OTP verification failed:", err);
                        alert("OTP verification failed. Please try again.");
                    }
                    break;


                default:
                    console.log("Invalid action type");
                    break;
            }
        } catch (err) {
            console.error("Error in API call:", err);
        }
    };


    return (
        <div className="container">
            {content &&
                (
                    <div>
                        {React.createElement('div', { dangerouslySetInnerHTML: { __html: content.Content } })}

                        {/* {content.Content} */}
                    </div>
                )}

            <div className="text-center m-2 bg-light p-2" >
                <button className="btn btn-lg vote-btn " onClick={() => setVotePopup(true)} >VOTE NOW</button>
            </div>

            <Modal
                className="event-popup register-popup otp-popup"
                show={votePopup}
                onHide={() => setVotePopup(false)}
                animation={false}
            >
                <Modal.Header closeButton className="pb-0">
                    <Modal.Title>
                        <img src={imgEvent} width="60" />
                        <span>Vote Now</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pl-3">
                    <div className="row justify-content-between px-3">
                        {reSendOtp ? <>
                            <div className="col-lg-8 ">
                                <input
                                    className=" vote-input"
                                    placeholder="Enter OTP"
                                    name="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)} // Handle OTP input
                                // className="form-control"
                                />
                            </div>

                            <button
                                className="ps-3 col-lg-4 btn btn-lg vote-btn mob-resp"
                                onClick={() => handleClick("verifyOtp", otp)} // Verify OTP
                            >
                                Verify OTP
                            </button>

                        </> : <>
                            <div className="row">
                                <div className="col-lg-8  ">
                                    <input
                                        className="vote-input"
                                        placeholder="Enter your email"
                                        name="votingEmail"
                                        value={votingEmail}
                                        onChange={(e) => setVotingEmail(e.target.value)} />
                                    <br />
                                </div>
                                <button className="col-lg-4 btn btn-lg vote-btn mob-resp"
                                    onClick={handleSendOtp} >Get OTP</button>
                            </div>
                        </>
                        }
                    </div>
                    <div >
                        {reSendOtp && <>
                            <p className="text-center mt-3 ps-3 fw-bold text-decoration-underline " style={{ cursor: "pointer" }} onClick={handleResendOtp} >
                                Resend OTP
                            </p>
                            <p className="text-center" >Expires {isTimerActive && `in ${formatTime(timer)}`}</p>
                        </>

                        }

                    </div>
                </Modal.Body>
            </Modal>

        </div>

    )

}

export default Cms