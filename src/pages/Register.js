import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Input, Label, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import bg from '../assets/img/register_bg.png';
import Select from "react-select";
import axios from 'axios'
import StartupForm from "../components/StartupForm";
import InvestorForm from "../components/InvestorForm";
import VisitorForm from "../components/VIsitorForm";
import SponsorForm from "../components/SponsorForm";
import ExhibitorForm from "../components/ExhibitorForm";
import imgEvent from "../assets/img/eventPass.png"
import logo from "../assets/img/logo.png";
import Modal from 'react-bootstrap/Modal';
import map from "../assets/img/Map.png";
import frame from "../assets/img/event-ticket.png";
import isdCodes from "../components/CountryCode"
import TicketPopup from "../components/TicketPopup";

const Register = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const initialValues = {
        contactPersonName: '',
        email: '',
        contactNo: '',
        countryCode: '',
        companyName: '',
        founderName: '',
        categoryId: '',
        stageOfStartup: '',
        teamSize: '',
        City: '',
        description: '',
        legalName: '',
        yearFounded: '',
        terms: false,
        logo: '',
        pincode: '',
        address: '',
        CountryID: '',
        StateID: '',
        brochure: '',
        productImages: '',

    }

    const investorInitialValue = {
        contactPersonName: '',
        email: '',
        contactNo: '',
        countryCode: '',
        companyName: '',
        investmentAmount: '',
    }

    const visitorInitialValue = {
        contactPersonName: '',
        email: '',
        contactNo: '',
        countryCode: '',
        visitDay: '',
        dateOfBirth: '',
        gender: '',
    }

    const sponsorInitialValue = {
        contactPersonName: '',
        email: '',
        contactNo: '',
        countryCode: '',
        companyName: '',
        categoryId: '',
        terms: false,
    }

    const exhibitorInitialValue = {
        contactPersonName: '',
        email: '',
        contactNo: '',
        countryCode: '',
        companyName: '',
        founderName: '',
        categoryId: '',
        stageOfStartup: '',
        terms: false,
    }

    const [values, setValues] = useState(initialValues);
    const [investorvalues, setInvestorValues] = useState(investorInitialValue);
    const [visitorValues, setVisitorValues] = useState(visitorInitialValue);
    const [sponsorValues, setSponsorValues] = useState(sponsorInitialValue);
    const [exhibitorValues, setExhibitorValues] = useState(exhibitorInitialValue);

    const [customActiveTab, setCustomActiveTab] = useState('4');
    const [ticketPopup, setTicketPopup] = useState(false);
    const [addMore, setAddMore] = useState(false)

    const [quantity, setQuantity] = useState(0);

    const toggleCustom = tab => {
        if (customActiveTab !== tab) {
            setCustomActiveTab(tab);
        }
    };

    const [categories, setCategories] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/categoryMaster`)
            console.log(res)
            setCategories(res.data);
        }
        catch (error) {
            console.error(error)
        }

    }

    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState();
    const [exhibitorTickets, setExhibitorTickets] = useState([]);
    const [selectedExhibitorTicket, setSelectedExhibitorTicket] = useState(null);

    const loadTickets = async () => {
        let category = customActiveTab === '1' ? '66deba1c8d13756fe2697beb'
            : customActiveTab === '2' ? '66deba2b8d13756fe2697bee'
                : customActiveTab === '3' ? '66deba3b8d13756fe2697bf1'
                    : customActiveTab === '4' ? '66e1617c158fdfa7198f4763' : null
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list-by-participant/ticketMaster/${category}`)
            console.log("ticket detailssss", res)
            setTickets(res.data);
        }
        catch (error) {
            console.error(error)
        }
    }

    const loadExhibitorTickets = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/active-tickets/66deba1c8d13756fe2697beb`)
            console.log("exhibitor tickets", res.data)
            setExhibitorTickets(res.data);
        }
        catch (error) {
            console.error(error)
        }
    }

    const [country, setCountry] = useState([])
    const fetchCountry = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/location/country`)
            console.log(res)
            setCountry(res.data);
        }
        catch (error) {
            console.error(error)
        }

    }
    const [states, setStates] = useState([])
    const fetchState = async (_id) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/location/statesByCountry/${_id}`)
            console.log(res)

            setStates(res.data);
        }
        catch (error) {
            console.error(error)
        }

    }

    const [stages, setStages] = useState([])
    const fetchStages = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/StageOfStartup`)
            console.log(res)
            setStages(res.data);
        }
        catch (error) {
            console.error(error)
        }

    }


    useEffect(() => {

        fetchData()
        fetchCountry()
        fetchStages()
        loadTickets();
        loadExhibitorTickets();

    }, [])

    useEffect(() => {

        loadTickets();

    }, [customActiveTab])

    const handleChange = (e) => {


        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value
        });


    };
    const handleInvestorChange = (e) => {


        const { name, value, type, checked } = e.target;
        setInvestorValues({
            ...investorvalues,
            [name]: type === 'checkbox' ? checked : value
        });


    };

    const handleVisitorChange = (e) => {


        const { name, value, type, checked } = e.target;
        setVisitorValues({
            ...visitorValues,
            [name]: type === 'checkbox' ? checked : value
        });


    };

    const handleSponsorChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSponsorValues({
            ...sponsorValues,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleExhibitorChange = (e) => {
        const { name, value, type, checked } = e.target;
        setExhibitorValues({
            ...exhibitorValues,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleTicketSelection = (ticketId) => {
        setSelectedExhibitorTicket(ticketId);
        setTicketId(ticketId);
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setValues({
            ...values,
            [name]: files[0]
        });
    };
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true)
        // setRegisterData([])
    };
    const handleClose = () => {
        setShow(false)
        setRegisterData([])
    };

    const validateForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
        if (!values.contactPersonName) {
            errors.contactPersonName = 'Contact Person Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Invalid Email address!';
        }
        if (!values.contactNo && !values.countryCode) {
            errors.contactNo = 'Contact Number and country code is required';
        }
        if (!values.contactNo) {
            errors.contactNo = 'Contact Number is required';
        } else if (!contactRegex.test(values.contactNo)) {
            errors.contactNo = 'Invalid Mobile Number!';
        }
        if (!values.companyName) {
            errors.companyName = 'Startup name is required';
        }
        if (!values.founderName) {
            errors.founderName = 'Founder Name is required';
        }
        if (!values.countryCode) {
            errors.countryCode = 'Country Code is required';
        }
        if (!values.categoryId) {
            errors.categoryId = 'Industry/Sector is required';
        }
        if (!values.stageOfStartup) {
            errors.stageOfStartup = 'Stage of Startup is required';
        }
        if (!values.teamSize) {
            errors.teamSize = 'Team Size is required';
        }
        if (!values.pincode) {
            errors.pincode = 'Pincode is required';
        }
        if (!values.address) {
            errors.address = 'Address is required';
        }
        if (!values.CountryID) {
            errors.CountryID = 'Country is required';
        }
        if (!values.StateID) {
            errors.StateID = 'State is required';
        }
        if (!values.description) {
            errors.description = 'Brief About Startup is required';
        }
        if (!values.City) {
            errors.City = 'City is required';
        }
        if (!values.legalName) {
            errors.legalName = 'Legal Name Startup is required';
        }
        if (!values.yearFounded) {
            errors.yearFounded = 'Establishment Date of  Startup is required';
        }
        if (!values.terms) {
            errors.terms = 'Please accept the terms and conditions';
        }
        setFormErrors(errors);
        return errors;
    };
    const [InvestorformErrors, setInvestorFormErrors] = useState({});
    const validateInvestorForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
        
        if (!investorvalues.contactPersonName) {
            errors.contactPersonName = 'Name is required';
        }
        if (!investorvalues.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(investorvalues.email)) {
            errors.email = 'Invalid Email address!';
        }
        if (!investorvalues.contactNo) {
            errors.contactNo = 'Contact Number is required';
        } else if (!contactRegex.test(investorvalues.contactNo)) {
            errors.contactNo = 'Invalid Mobile Number!';
        }
        if (!investorvalues.countryCode) {
            errors.countryCode = 'Country Code is required';
        }
        if (!investorvalues.companyName) {
            errors.companyName = 'Company Name is required';
        }
        if (!investorvalues.investmentAmount) {
            errors.investmentAmount = 'Investment Amount is required';
        }
        
        setInvestorFormErrors(errors);
        return errors;
    };

    const [visitorformErrors, setvisitorFormErrors] = useState({});
    const [sponsorFormErrors, setSponsorFormErrors] = useState({});
    const [exhibitorFormErrors, setExhibitorFormErrors] = useState({});

    const validateVisitorForm = () => {
        const errors = {};
        if (!visitorValues.contactPersonName) {
            errors.contactPersonName = 'Name is required';
        }
        if (!visitorValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(visitorValues.email)) {
            errors.email = 'Email is invalid';
        }
        if (!visitorValues.contactNo) {
            errors.contactNo = 'Contact number is required';
        }
        if (!visitorValues.countryCode) {
            errors.countryCode = 'Country code is required';
        }
        if (!visitorValues.visitDay) {
            errors.visitDay = 'Visit day is required';
        }
        if (!visitorValues.dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required';
        }
        if (!visitorValues.gender) {
            errors.gender = 'Gender is required';
        }
        setvisitorFormErrors(errors);
        return errors;
    };

    const validateSponsorForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactRegex = /((\+*)((0[ -]*)*(|(91 )*))(((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6})/;

        if (!sponsorValues.contactPersonName) {
            errors.contactPersonName = 'Name is required';
        }
        if (!sponsorValues.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(sponsorValues.email)) {
            errors.email = 'Email is invalid';
        }
        if (!sponsorValues.contactNo) {
            errors.contactNo = 'Contact number is required';
        } else if (!contactRegex.test(sponsorValues.contactNo)) {
            errors.contactNo = 'Invalid Mobile Number!';
        }
        if (!sponsorValues.countryCode) {
            errors.countryCode = 'Country code is required';
        }
        if (!sponsorValues.companyName) {
            errors.companyName = 'Company name is required';
        }
        if (!sponsorValues.categoryId) {
            errors.categoryId = 'Industry is required';
        }
        if (!sponsorValues.terms) {
            errors.terms = 'Please accept the terms and conditions';
        }

        setSponsorFormErrors(errors);
        return errors;
    };

    const validateExhibitorForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactRegex = /((\+*)((0[ -]*)*(|(91 )*))((\d{12})+|(\d{10})+))|(\d{5}([- ]*)\d{6})/;
        
        if (!exhibitorValues.contactPersonName) {
            errors.contactPersonName = 'Name is required';
        }
        if (!exhibitorValues.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(exhibitorValues.email)) {
            errors.email = 'Email is invalid';
        }
        if (!exhibitorValues.contactNo) {
            errors.contactNo = 'Contact number is required';
        } else if (!contactRegex.test(exhibitorValues.contactNo)) {
            errors.contactNo = 'Invalid Mobile Number!';
        }
        if (!exhibitorValues.countryCode) {
            errors.countryCode = 'Country code is required';
        }
        if (!exhibitorValues.companyName) {
            errors.companyName = 'Startup name is required';
        }
        if (!exhibitorValues.founderName) {
            errors.founderName = 'Founder name is required';
        }
        if (!exhibitorValues.categoryId) {
            errors.categoryId = 'Industry is required';
        }
        if (!exhibitorValues.stageOfStartup) {
            errors.stageOfStartup = 'Stage of startup is required';
        }
        if (!selectedExhibitorTicket) {
            errors.ticketType = 'Please select a ticket type';
        }
        if (!exhibitorValues.terms) {
            errors.terms = 'Please accept the terms and conditions';
        }
        
        setExhibitorFormErrors(errors);
        return errors;
    };


    const [participant, setPaticipantId] = useState('66deba1c8d13756fe2697beb')
    const [ticketId, setTicketId] = useState('66e162ee158fdfa7198f4765')
    const [isInvestor, setIsInvestor] = useState(true)
    const [registerData, setRegisterData] = useState([])
    const handleSubmit = async (e) => {
        setIsSubmit(true);
        console.log("ll");
        // handleShow()
        const errors = validateForm();
        console.log(errors);

        if (Object.keys(errors).length === 0) {
            const data = {
                contactPersonName: values.contactPersonName,
                email: values.email,
                contactNo: values.contactNo,
                countryCode: values.countryCode.value,
                companyName: values.companyName,
                founderName: values.founderName,
                categoryId: values.categoryId.value,
                stageOfStartup: values.stageOfStartup.value,
                teamSize: values.teamSize,
                City: values.City,
                description: values.description,
                legalName: values.legalName,
                yearFounded: values.yearFounded,
                terms: values.terms,
                pincode: values.pincode,
                address: values.address,
                CountryID: values.CountryID.value,
                StateID: values.StateID.value,
                participantCategoryId: participant,
                ticketId: ticketId
            };
            
            console.log(data);

            try {
                const res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/create/StartUpDetailsMaster`, data);
                if (res.data.isOk) {
                    setAddMore(false)
                    // alert("Form submitted successfully")
                    alert("Form submitted successfully")
                    console.log(res)
                    console.log(registerData)
                    setRegisterData((prevData) => [...prevData, res.data.data]);


                    // try {
                    //     const data = {
                    //         email: res.data.data.email,
                    //         password: res.data.data.password
                    //     }
                    //     const res2 = await axios.post(`${process.env.REACT_APP_URL}/api/sendOTPEmail`, data);
                    //     console.log("res", res2)
                    //     if (res2.data.isOk) {
                    //         // alert(res2.data.message)
                    //     }
                    // }
                    // catch (error) {
                    //     console.error("An error occurred during submission:", error.message);
                    // }
                    setValues(initialValues)
                    console.log(customActiveTab)
                    handleShow()


                }
                else {
                    console.log(res.data)
                    alert(res.data.message)
                }
            }
            catch (error) {
                console.error("An error occurred during submission:", error.message);
                // alert("An error occurred while submitting the form. Please try again after some time.");
            }
        }
    };

    const handleInvestorSubmit = async (e) => {
        setIsSubmit(true);
        console.log("ll");

        const errors = validateInvestorForm();
        console.log(errors);
        if (Object.keys(errors).length === 0) {

            const data = {
                name: investorvalues.contactPersonName,
                email: investorvalues.email,
                contactNo: investorvalues.contactNo,
                countryCode: investorvalues.countryCode.value,
                companyName: investorvalues.companyName,
                investmentAmount: investorvalues.investmentAmount,
                participantCategoryId: participant,
                ticketId: ticketId
            }
            // Handle file uploads


            try {
                // let res
                // if (isInvestor === true) {
                let res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/investor`, data);
                // }
                // else if (isInvestor == false) {
                //     res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/visitor`, data);
                // }
                if (res.data.isOk) {
                    setAddMore(false)
                    console.log(res)
                    alert("Form submitted successfully")
                    setInvestorValues(investorInitialValue)
                    setRegisterData((prevData) => [...prevData, res.data.data]);
                    handleShow()

                }
                else {
                    console.log(res.data)
                    alert(res.data.message)
                }
            }
            catch (error) {
                console.error("An error occurred during submission:", error.message);
                // alert("An error occurred while submitting the form. Please try again after some time.");
            }
        }
    };

    const handleVisitorSubmit = async (e) => {
        setIsSubmit(true);

        const errors = validateVisitorForm();
        if (Object.keys(errors).length === 0) {

            const data = {
                name: visitorValues.contactPersonName,
                email: visitorValues.email,
                contactNo: visitorValues.contactNo,
                countryCode: visitorValues.countryCode.value,
                visitDay: visitorValues.visitDay.value,
                dateOfBirth: visitorValues.dateOfBirth,
                gender: visitorValues.gender.value,
                participantCategoryId: participant,
                ticketId: ticketId
            }
            try {
                console.log(data)

                let res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/visitor`, data);

                if (res.data.isOk) {
                    setAddMore(false)
                    console.log(res)
                    alert("Form submitted successfully")
                    setVisitorValues(visitorInitialValue)
                    setCustomActiveTab('4');
                    setRegisterData((prevData) => [...prevData, res.data.data]);
                    handleShow()

                }
                else {
                    console.log(res.data)
                    alert(res.data.message)
                }
            }
            catch (error) {
                console.error("An error occurred during submission:", error.message);
            }
        }
    };

    const handleSponsorSubmit = async (e) => {
        setIsSubmit(true);

        const errors = validateSponsorForm();
        if (Object.keys(errors).length === 0) {
            const data = {
                contactPersonName: sponsorValues.contactPersonName,
                email: sponsorValues.email,
                contactNo: sponsorValues.contactNo,
                countryCode: sponsorValues.countryCode.value,
                companyName: sponsorValues.companyName,
                categoryId: sponsorValues.categoryId.value,
                participantCategoryId: participant,
                ticketId: ticketId
            }
            
            try {
                console.log(data)
                let res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/register/sponsor`, data);

                if (res.data.isOk) {
                    alert(res.data.message)
                    setSponsorValues(sponsorInitialValue)
                    // Don't show modal for sponsors, just reset form
                }
                else {
                    console.log(res.data)
                    alert(res.data.message)
                }
            }
            catch (error) {
                console.error("An error occurred during submission:", error.message);
                alert("An error occurred while submitting the form. Please try again.");
            }
        }
    };

    const handleExhibitorSubmit = async (e) => {
        setIsSubmit(true);

        const errors = validateExhibitorForm();
        if (Object.keys(errors).length === 0) {
            if (!selectedExhibitorTicket) {
                alert("Please select a ticket type before proceeding.");
                return;
            }

            const data = {
                contactPersonName: exhibitorValues.contactPersonName,
                email: exhibitorValues.email,
                contactNo: exhibitorValues.contactNo,
                countryCode: exhibitorValues.countryCode.value,
                companyName: exhibitorValues.companyName,
                founderName: exhibitorValues.founderName,
                categoryId: exhibitorValues.categoryId.value,
                stageOfStartup: exhibitorValues.stageOfStartup.value,
                participantCategoryId: participant,
                ticketId: selectedExhibitorTicket,
                registrationType: 'exhibitor',
                IsActive: false,
                IsPaid: false
            }
            
            try {
                console.log(data)
                let res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/create/StartUpDetailsMaster`, data);

                if (res.data.isOk) {
                    setAddMore(false)
                    console.log("Exhibitor registration successful, initiating payment...", res)
                    setExhibitorValues(exhibitorInitialValue)
                    setRegisterData((prevData) => [...prevData, res.data.data]);
                    
                    // Find the selected ticket to get the amount
                    const selectedTicket = exhibitorTickets.find(ticket => ticket._id === selectedExhibitorTicket);
                    if (selectedTicket) {
                        // Open payment gateway immediately after successful registration
                        await initiateExhibitorPayment([res.data.data], selectedTicket);
                    }
                }
                else {
                    console.log(res.data)
                    alert(res.data.message)
                }
            }
            catch (error) {
                console.error("An error occurred during submission:", error.message);
                alert("An error occurred while submitting the form. Please try again.");
            }
        }
    };

    const initiateExhibitorPayment = async (registrationData, selectedTicket) => {
        try {
            console.log("Initiating payment for registration data:", registrationData);
            console.log("Selected ticket:", selectedTicket);
            
            const { data: { order } } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/payment/checkout`, { 
                startupIds: registrationData, 
                selectedTicket: selectedTicket._id 
            });

            console.log("Checkout order for exhibitor:", order);

            const options = {
                key: "rzp_live_ST3UBESEnYNzQt",
                amount: order.amount,
                currency: "INR",
                name: 'Startupfest Gujarat',
                description: `Exhibitor Registration - ${selectedTicket.name}`,
                order_id: order.id,
                callback_url: `${process.env.REACT_APP_URL}/api/auth/payment/paymentVerification/1/${order.amount}?registerData=${encodeURIComponent(JSON.stringify(registrationData))}`,
                prefill: {
                    name: registrationData[0].contactPersonName,
                    email: registrationData[0].email,
                    contact: registrationData[0].contactNo
                },
                theme: {
                    color: '#F37254'
                },
                handler: async function (response) {
                    console.log("Payment Successful for exhibitor:", response);
                    
                    try {
                        // Send payment details to verification endpoint
                        const verificationResponse = await axios.post(
                            `${process.env.REACT_APP_URL}/api/auth/payment/paymentVerification/1/${order.amount}?registerData=${encodeURIComponent(JSON.stringify(registrationData))}`,
                            {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature
                            }
                        );
                        
                        console.log("Payment verification response:", verificationResponse);
                        alert(`Payment successful! You have registered for ${selectedTicket.name}. Confirmation email has been sent to your email address.`);
                        
                    } catch (error) {
                        console.error("Error verifying payment:", error);
                        alert("Payment successful but verification failed. Please contact support.");
                    }
                    
                    // Reset the selected ticket after successful payment
                    setSelectedExhibitorTicket(null);
                    setTicketId('');
                },
                modal: {
                    ondismiss: function() {
                        console.log("Payment cancelled");
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Error initiating payment. Please try again.");
        }
    };
    const handleCheckout = async () => {
        // const startupIds = registerData.map(item => item._id);
        // const ticketIds = registerData.map(item => item.ticketId);
        const { data: { order, person } } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/payment/checkout`, { startupIds: registerData, selectedTicket })

        console.log("checout order", order);

        const options = {
            // key: `${process.env.RAZORPAY_KEY_ID}`,
            // key: "rzp_test_qoZrYXqkyGbjef",
            key: "rzp_live_ST3UBESEnYNzQt",
            // key: "rzp_test_qoZrYXqkyGbjef",
            amount: order.amount,
            currency: "INR",
            name: 'Startupfest Gujarat',
            description: 'Test Transaction',
            order_id: order.id,
            callback_url: `${process.env.REACT_APP_URL}/api/auth/payment/paymentVerification/${customActiveTab}/${order.amount}?registerData=${encodeURIComponent(JSON.stringify(registerData))}`,
            prefill: {
                name: registerData[0].contactPersonName,
                email: registerData[0].email,
                contact: registerData[0].contactNo
            },
            theme: {
                color: '#F37254'
            },

            // handler: async function (response) {
            //     console.log("Payment Successful", response);
            //     if(response.razorpay_order_id){

            //     await axios.post(`${process.env.REACT_APP_URL}/api/auth/email/sendInvoice`, {
            //         order: order,
            //         registerData: registerData,
            //     });

            //     alert("Payment successful! Invoice has been sent to your email.");
            //     window.location.reload();
            // }
            // }


        };

        const rzp = new window.Razorpay(options);
        rzp.open();

    }


    return (
        <React.Fragment>
            <div className="register-bg register-form" >
                <Container fluid>

                    <Row className="">
                        <Col lg={5} xs={12} className="p-0">
                            <img src={bg} className="w-100 form-img" alt="Background" />
                        </Col>
                        <Col lg={6} xs={12}>
                            <div className="form-padding pb-4">
                                <h3 className="title mt-4 mb-1 pt-4">Register</h3>
                                <h5 className="para-custom">Let us know what you are seeking as</h5>

                                <Nav tabs className="nav-tabs-custom nav-success nav-justified mb-3">
                                    <NavItem className="f-15 pb-0">
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ active: customActiveTab === "4" })}
                                            onClick={() => {
                                                toggleCustom("4")
                                                setPaticipantId('66e1617c158fdfa7198f4763')
                                                setTicketId('66e163bd158fdfa7198f476d')
                                                setIsInvestor(false)

                                            }}
                                        >
                                            Visitor
                                        </NavLink>
                                    </NavItem>

                                    <NavItem className="f-15 pb-0">
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ active: customActiveTab === "3" })}
                                            onClick={() => {
                                                toggleCustom("3")
                                                setPaticipantId('66deba3b8d13756fe2697bf1')
                                                setTicketId('66e16380158fdfa7198f476b')
                                                setIsInvestor(true)

                                            }}
                                        >
                                            Investor
                                        </NavLink>
                                    </NavItem>

                                    <NavItem className="f-15 pb-0">
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ active: customActiveTab === "2" })}
                                            onClick={() => {
                                                toggleCustom("2")
                                                setPaticipantId('66deba2b8d13756fe2697bee')
                                                setTicketId('66e1631b158fdfa7198f4767')
                                            }
                                            }
                                        >
                                            Sponsors
                                        </NavLink>
                                    </NavItem>

                                    <NavItem className="f-15 pb-0">
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ active: customActiveTab === "1" })}
                                            onClick={() => {
                                                toggleCustom("1")
                                                setPaticipantId("66deba1c8d13756fe2697beb")
                                                // setTicketId('66e162ee158fdfa7198f4765')
                                                // setValues(initialValues)
                                            }}
                                        >
                                            Exhibitor
                                        </NavLink>
                                    </NavItem>



                                </Nav>

                                <TabContent activeTab={customActiveTab}>

                    <TabPane tabId="1">
                        <div>
                            <ExhibitorForm
                                exhibitorValues={exhibitorValues}
                                handleExhibitorChange={handleExhibitorChange}
                                exhibitorFormErrors={exhibitorFormErrors}
                                isSubmit={isSubmit}
                                handleExhibitorSubmit={handleExhibitorSubmit}
                                setExhibitorValues={setExhibitorValues}
                                isdCodes={isdCodes}
                                categories={categories}
                                stages={stages}
                                exhibitorTickets={exhibitorTickets}
                                selectedExhibitorTicket={selectedExhibitorTicket}
                                handleTicketSelection={handleTicketSelection}
                            />
                        </div>
                    </TabPane>
                                    <TabPane tabId="2">
                                        <div>
                                            <SponsorForm
                                                sponsorValues={sponsorValues}
                                                handleSponsorChange={handleSponsorChange}
                                                sponsorFormErrors={sponsorFormErrors}
                                                isSubmit={isSubmit}
                                                handleSponsorSubmit={handleSponsorSubmit}
                                                setSponsorValues={setSponsorValues}
                                                isdCodes={isdCodes}
                                                categories={categories}
                                            />
                                        </div>
                                    </TabPane>                                    <TabPane tabId="3">
                                        <div>
                                            <InvestorForm
                                                investorvalues={investorvalues}
                                                handleInvestorChange={handleInvestorChange}
                                                InvestorformErrors={InvestorformErrors}
                                                isSubmit={isSubmit}
                                                handleInvestorSubmit={handleInvestorSubmit}
                                                setInvestorValues={setInvestorValues}
                                                isdCodes={isdCodes}
                                            />
                                        </div>
                                    </TabPane>

                                    <TabPane tabId="4">
                                        <div>
                                            <VisitorForm
                                                investorvalues={visitorValues}
                                                handleInvestorChange={handleVisitorChange}
                                                InvestorformErrors={visitorformErrors}
                                                isSubmit={isSubmit}
                                                handleInvestorSubmit={handleVisitorSubmit}
                                                setInvestorValues={setVisitorValues}
                                                isdCodes={isdCodes}
                                            />
                                            {/* <Button type="button" color="primary" className="mt-3 register-btn" onClick={(e) => { 
                                                e.preventDefault();
                                                window.open('https://allevents.in/ahmedabad/start-up-fest-20-gujarat-by-snehshilp-foundation/80002391998377?ref=smdl', '_blank');
                                                 }} 
                                            >Register</Button> */}

                                        </div>

                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal
                className="event-popup"
                show={show}
                onHide={handleClose}
                animation={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src={imgEvent} />
                        {customActiveTab === '1' && <span>Exhibitor</span>}
                        {customActiveTab === '2' && <span>Sponsor</span>}
                        {customActiveTab === '3' && <span>Investor</span>}
                        {customActiveTab === '4' && <span>Visitor</span>}
                        <span>Event Pass</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Here is your pass for  {" "}
                    {customActiveTab === '1' && <span>Exhibitor</span>}
                    {customActiveTab === '2' && <span>Sponsor</span>}
                    {customActiveTab === '3' && <span>Investor</span>}
                    {customActiveTab === '4' && <span>Visitor</span>}
                    <Row className='scroll-hori'>
                        {/* {console.log(registerData)} */}
                        <Col lg={6}>
                            {registerData?.map((items, index) => {
                                return (
                                    <Row className='mb-2 ticket-area' key={index}>
                                        <Col lg={7} className="b-right">
                                            <div className="logo-area">
                                                <img src={map} className="map-img" alt="" />
                                                <img src={logo} className="logo-img" alt="" />
                                            </div>
                                            <div className="name">

                                                <div className="txt-ixon">
                                                    <div className="tick-name">
                                                        <h6>Event Name </h6>
                                                        <p>
                                                            <b>{items.Event.name}</b>
                                                        </p>
                                                    </div>
                                                    {/* <img src={frame} className="frame-img" /> */}
                                                </div>

                                                <div className="txt-ixon two">
                                                    <div className="tick-name">
                                                        <h6>Date </h6>
                                                        <p>
                                                            <b>{new Date(items.Event.startDate).toLocaleDateString()} - {new Date(items.Event.endDate).toLocaleDateString()}</b>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="txt-ixon two h-100 align-content-center">
                                                <div className='name'>
                                                    <h5>{items.contactPersonName ? items.contactPersonName : items.name}</h5>
                                                    <hr />
                                                </div>
                                                <div className="tick-name">
                                                    <h6>Email </h6>
                                                    <p>
                                                        <b>{items.email}</b>
                                                    </p>
                                                </div>
                                                <div className="tick-name">
                                                    <h6>Contact </h6>
                                                    <p>
                                                        <b>{items.countryCode}{items.contactNo}</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={1} className="p-0">
                                            <div className="bg-blue">
                                                <p className="vert-txt">Event pass</p>
                                            </div>
                                        </Col>
                                    </Row>)
                            })}
                        </Col>
                        <Col lg={6}>
                            <Button
                                type="button"
                                onClick={() => {
                                    setAddMore(!addMore);
                                    // Keep the current active tab when adding attendees
                                }}
                                className="no-style"
                            >+ Add Attendees</Button>
                            {/* {console.log(customActiveTab)} */}
                            {addMore && (
                                customActiveTab === '1' ? (
                                    <div>
                                        <ExhibitorForm
                                            exhibitorValues={exhibitorValues}
                                            handleExhibitorChange={handleExhibitorChange}
                                            exhibitorFormErrors={exhibitorFormErrors}
                                            isSubmit={isSubmit}
                                            handleExhibitorSubmit={handleExhibitorSubmit}
                                            setExhibitorValues={setExhibitorValues}
                                            isdCodes={isdCodes}
                                            categories={categories}
                                            stages={stages}
                                            exhibitorTickets={exhibitorTickets}
                                            selectedExhibitorTicket={selectedExhibitorTicket}
                                            handleTicketSelection={handleTicketSelection}
                                        />
                                    </div>
                                ) : customActiveTab === '2' ? (
                                    <div>
                                        <SponsorForm
                                            sponsorValues={sponsorValues}
                                            handleSponsorChange={handleSponsorChange}
                                            sponsorFormErrors={sponsorFormErrors}
                                            isSubmit={isSubmit}
                                            handleSponsorSubmit={handleSponsorSubmit}
                                            setSponsorValues={setSponsorValues}
                                            isdCodes={isdCodes}
                                            categories={categories}
                                        />
                                    </div>
                                ) : customActiveTab === '3' ? (
                                    <div>
                                        <InvestorForm
                                            investorvalues={investorvalues}
                                            handleInvestorChange={handleInvestorChange}
                                            InvestorformErrors={InvestorformErrors}
                                            isSubmit={isSubmit}
                                            handleInvestorSubmit={handleInvestorSubmit}
                                            setInvestorValues={setInvestorValues}
                                            isdCodes={isdCodes}
                                        />
                                    </div>
                                ) : customActiveTab === '4' ? (
                                    <div>
                                        <VisitorForm
                                            investorvalues={visitorValues}
                                            handleInvestorChange={handleVisitorChange}
                                            InvestorformErrors={visitorformErrors}
                                            isSubmit={isSubmit}
                                            handleInvestorSubmit={handleVisitorSubmit}
                                            setInvestorValues={setVisitorValues}
                                            isdCodes={isdCodes}
                                        />
                                    </div>
                                ) : null
                            )}

                            <div>
                                <Button type="button" color="primary" className="mt-3 register-btn" onClick={() => setTicketPopup(true)} disabled={addMore} >Proceed</Button>
                            </div>

                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>

            {/* <TicketPopup
                ticketPopup={ticketPopup}
                setTicketPopup={setTicketPopup}
                quantity={registerData?.length ? registerData?.length : 0}
                setQuantity={setQuantity}
                handleCheckout={handleCheckout}
                category={customActiveTab === '1' ? '66deba1c8d13756fe2697beb' : customActiveTab === '2' ? '66deba2b8d13756fe2697bee' : customActiveTab === '3' ? '66deba3b8d13756fe2697bf1' : customActiveTab === '4' ? '66e1617c158fdfa7198f4763' : null}
            /> */}

            <Modal
                className="event-popup register-popup"
                show={ticketPopup}
                onHide={() => {
                    setTicketPopup(false);
                    setSelectedTicket();
                }}
                animation={false}
            >
                <Modal.Header closeButton className="pb-0">
                    <Modal.Title>
                        <img src={imgEvent} width="60" />
                        <span>Select Tickets</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pl-3">
                    <div className="d-flex justify-content-between px-3">
                        <h6 className="mt-3">Ticket  </h6>
                        <h6 className="mt-3">Quantity </h6>
                    </div>
                    <Row className="ticket-row">
                        {tickets?.map((t) => {
                            return <Col lg={12} >
                                <Button
                                    onClick={() => {
                                        setSelectedTicket(t._id)
                                    }}
                                    style={{
                                        border: selectedTicket === t._id ? '1px solid blue' : 'none', // #28a745 is the Bootstrap "success" color
                                        backgroundColor: selectedTicket === t._id ? '#f8f9fa' : ' #F4F9FE' // bg-light equivalent
                                    }}
                                    className="no-btn-style container-bg"
                                // className={selectedTicket === t._id ? `border-1 no-btn-style container-bg` : 'no-btn-style container-bg  '}
                                >
                                    <div  >
                                        <h6 className="fw-bold mb-3">{t.name} (₹) </h6>
                                        <div className="input-num">
                                            <div className="amt-input">
                                                <input type="num" value={t.amount} className="amount" placeholder="amont" />
                                            </div>
                                            <div className="ince-btns">
                                                <input
                                                    type="num"
                                                    className="text-center bg-primary text-light"
                                                    onChange={(e) => {
                                                        setQuantity(e.target.value);
                                                    }}
                                                    value={registerData?.length ? registerData?.length : 0}
                                                    min={0}
                                                />
                                            </div>
                                        </div>
                                        {/* <p className="text-gray pt-3">{t.remarks}</p> */}
                                    </div>
                                </Button>

                                <hr />
                            </Col>
                        })}

                    </Row>

                    <div>
                        <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleCheckout} disabled={!selectedTicket} >Checkout</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};

export default Register;
