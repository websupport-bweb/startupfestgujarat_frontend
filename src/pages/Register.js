import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Input, Label, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import bg from '../assets/img/register_bg.png';
import Select from "react-select";
import axios from 'axios'
import StartupForm from "../components/StartupForm";
import InvestorForm from "../components/VIsitorForm";
import imgEvent from "../assets/img/eventPass.png"
import logo from "../assets/img/logo.png";
import Modal from 'react-bootstrap/Modal';
import map from "../assets/img/Map.png";
import frame from "../assets/img/event-ticket.png";

const Register = () => {
    const isdCodes = [
        { country: "Afghanistan", code: "+93" },
        { country: "Albania", code: "+355" },
        { country: "Algeria", code: "+213" },
        { country: "Andorra", code: "+376" },
        { country: "Angola", code: "+244" },
        { country: "Antigua and Barbuda", code: "+1" },
        { country: "Argentina", code: "+54" },
        { country: "Armenia", code: "+374" },
        { country: "Australia", code: "+61" },
        { country: "Austria", code: "+43" },
        { country: "Azerbaijan", code: "+994" },
        { country: "Bahamas", code: "+1" },
        { country: "Bahrain", code: "+973" },
        { country: "Bangladesh", code: "+880" },
        { country: "Barbados", code: "+1" },
        { country: "Belarus", code: "+375" },
        { country: "Belgium", code: "+32" },
        { country: "Belize", code: "+501" },
        { country: "Benin", code: "+229" },
        { country: "Bermuda", code: "+1" },
        { country: "Bhutan", code: "+975" },
        { country: "Bolivia", code: "+591" },
        { country: "Bosnia and Herzegovina", code: "+387" },
        { country: "Botswana", code: "+267" },
        { country: "Brazil", code: "+55" },
        { country: "Brunei", code: "+673" },
        { country: "Bulgaria", code: "+359" },
        { country: "Burkina Faso", code: "+226" },
        { country: "Burundi", code: "+257" },
        { country: "Cabo Verde", code: "+238" },
        { country: "Cambodia", code: "+855" },
        { country: "Cameroon", code: "+237" },
        { country: "Canada", code: "+1" },
        { country: "Cayman Islands", code: "+1" },
        { country: "Central African Republic", code: "+236" },
        { country: "Chad", code: "+235" },
        { country: "Chile", code: "+56" },
        { country: "China", code: "+86" },
        { country: "Colombia", code: "+57" },
        { country: "Comoros", code: "+269" },
        { country: "Congo", code: "+242" },
        { country: "Congo, Democratic Republic of the", code: "+243" },
        { country: "Cook Islands", code: "+682" },
        { country: "Costa Rica", code: "+506" },
        { country: "Croatia", code: "+385" },
        { country: "Cuba", code: "+53" },
        { country: "Curaçao", code: "+599" },
        { country: "Cyprus", code: "+357" },
        { country: "Czech Republic", code: "+420" },
        { country: "Denmark", code: "+45" },
        { country: "Djibouti", code: "+253" },
        { country: "Dominica", code: "+1" },
        { country: "Dominican Republic", code: "+1" },
        { country: "Ecuador", code: "+593" },
        { country: "Egypt", code: "+20" },
        { country: "El Salvador", code: "+503" },
        { country: "Equatorial Guinea", code: "+240" },
        { country: "Eritrea", code: "+291" },
        { country: "Estonia", code: "+372" },
        { country: "Eswatini", code: "+268" },
        { country: "Ethiopia", code: "+251" },
        { country: "Falkland Islands", code: "+500" },
        { country: "Faroe Islands", code: "+298" },
        { country: "Fiji", code: "+679" },
        { country: "Finland", code: "+358" },
        { country: "France", code: "+33" },
        { country: "French Guiana", code: "+594" },
        { country: "French Polynesia", code: "+689" },
        { country: "French Southern Territories", code: "+262" },
        { country: "Gabon", code: "+241" },
        { country: "Gambia", code: "+220" },
        { country: "Georgia", code: "+995" },
        { country: "Germany", code: "+49" },
        { country: "Ghana", code: "+233" },
        { country: "Gibraltar", code: "+350" },
        { country: "Greece", code: "+30" },
        { country: "Greenland", code: "+299" },
        { country: "Grenada", code: "+1" },
        { country: "Guadeloupe", code: "+590" },
        { country: "Guam", code: "+1" },
        { country: "Guatemala", code: "+502" },
        { country: "Guernsey", code: "+44" },
        { country: "Guinea", code: "+224" },
        { country: "Guinea-Bissau", code: "+245" },
        { country: "Guyana", code: "+592" },
        { country: "Haiti", code: "+509" },
        { country: "Honduras", code: "+504" },
        { country: "Hong Kong", code: "+852" },
        { country: "Hungary", code: "+36" },
        { country: "Iceland", code: "+354" },
        { country: "India", code: "+91" },
        { country: "Indonesia", code: "+62" },
        { country: "Iran", code: "+98" },
        { country: "Iraq", code: "+964" },
        { country: "Ireland", code: "+353" },
        { country: "Isle of Man", code: "+44" },
        { country: "Israel", code: "+972" },
        { country: "Italy", code: "+39" },
        { country: "Ivory Coast", code: "+225" },
        { country: "Jamaica", code: "+1" },
        { country: "Japan", code: "+81" },
        { country: "Jordan", code: "+962" },
        { country: "Kazakhstan", code: "+7" },
        { country: "Kenya", code: "+254" },
        { country: "Kiribati", code: "+686" },
        { country: "Kuwait", code: "+965" },
        { country: "Kyrgyzstan", code: "+996" },
        { country: "Laos", code: "+856" },
        { country: "Latvia", code: "+371" },
        { country: "Lebanon", code: "+961" },
        { country: "Lesotho", code: "+266" },
        { country: "Liberia", code: "+231" },
        { country: "Libya", code: "+218" },
        { country: "Liechtenstein", code: "+423" },
        { country: "Lithuania", code: "+370" },
        { country: "Luxembourg", code: "+352" },
        { country: "Macau", code: "+853" },
        { country: "Madagascar", code: "+261" },
        { country: "Malawi", code: "+265" },
        { country: "Malaysia", code: "+60" },
        { country: "Maldives", code: "+960" },
        { country: "Mali", code: "+223" },
        { country: "Malta", code: "+356" },
        { country: "Marshall Islands", code: "+692" },
        { country: "Martinique", code: "+596" },
        { country: "Mauritania", code: "+222" },
        { country: "Mauritius", code: "+230" },
        { country: "Mayotte", code: "+262" },
        { country: "Mexico", code: "+52" },
        { country: "Micronesia", code: "+691" },
        { country: "Moldova", code: "+373" },
        { country: "Monaco", code: "+377" },
        { country: "Mongolia", code: "+976" },
        { country: "Montenegro", code: "+382" },
        { country: "Montserrat", code: "+1" },
        { country: "Morocco", code: "+212" },
        { country: "Mozambique", code: "+258" },
        { country: "Myanmar", code: "+95" },
        { country: "Namibia", code: "+264" },
        { country: "Nauru", code: "+674" },
        { country: "Nepal", code: "+977" },
        { country: "Netherlands", code: "+31" },
        { country: "New Caledonia", code: "+687" },
        { country: "New Zealand", code: "+64" },
        { country: "Nicaragua", code: "+505" },
        { country: "Niger", code: "+227" },
        { country: "Nigeria", code: "+234" },
        { country: "Niue", code: "+683" },
        { country: "Norfolk Island", code: "+672" },
        { country: "North Korea", code: "+850" },
        { country: "North Macedonia", code: "+389" },
        { country: "Northern Mariana Islands", code: "+1" },
        { country: "Norway", code: "+47" },
        { country: "Oman", code: "+968" },
        { country: "Pakistan", code: "+92" },
        { country: "Palau", code: "+680" },
        { country: "Palestine", code: "+970" },
        { country: "Panama", code: "+507" },
        { country: "Papua New Guinea", code: "+675" },
        { country: "Paraguay", code: "+595" },
        { country: "Peru", code: "+51" },
        { country: "Philippines", code: "+63" },
        { country: "Poland", code: "+48" },
        { country: "Portugal", code: "+351" },
        { country: "Puerto Rico", code: "+1" },
        { country: "Qatar", code: "+974" },
        { country: "Romania", code: "+40" },
        { country: "Russia", code: "+7" },
        { country: "Rwanda", code: "+250" },
        { country: "Saint Kitts and Nevis", code: "+1" },
        { country: "Saint Lucia", code: "+1" },
        { country: "Saint Vincent and the Grenadines", code: "+1" },
        { country: "Samoa", code: "+685" },
        { country: "San Marino", code: "+378" },
        { country: "Sao Tome and Principe", code: "+239" },
        { country: "Saudi Arabia", code: "+966" },
        { country: "Senegal", code: "+221" },
        { country: "Serbia", code: "+381" },
        { country: "Seychelles", code: "+248" },
        { country: "Sierra Leone", code: "+232" },
        { country: "Singapore", code: "+65" },
        { country: "Sint Maarten", code: "+1" },
        { country: "Slovakia", code: "+421" },
        { country: "Slovenia", code: "+386" },
        { country: "Solomon Islands", code: "+677" },
        { country: "Somalia", code: "+252" },
        { country: "South Africa", code: "+27" },
        { country: "South Korea", code: "+82" },
        { country: "South Sudan", code: "+211" },
        { country: "Spain", code: "+34" },
        { country: "Sri Lanka", code: "+94" },
        { country: "Sudan", code: "+249" },
        { country: "Suriname", code: "+597" },
        { country: "Sweden", code: "+46" },
        { country: "Switzerland", code: "+41" },
        { country: "Syria", code: "+963" },
        { country: "Taiwan", code: "+886" },
        { country: "Tajikistan", code: "+992" },
        { country: "Tanzania", code: "+255" },
        { country: "Thailand", code: "+66" },
        { country: "Timor-Leste", code: "+670" },
        { country: "Togo", code: "+228" },
        { country: "Tokelau", code: "+690" },
        { country: "Tonga", code: "+676" },
        { country: "Trinidad and Tobago", code: "+1" },
        { country: "Tunisia", code: "+216" },
        { country: "Turkey", code: "+90" },
        { country: "Turkmenistan", code: "+993" },
        { country: "Turks and Caicos Islands", code: "+1" },
        { country: "Tuvalu", code: "+688" },
        { country: "Uganda", code: "+256" },
        { country: "Ukraine", code: "+380" },
        { country: "United Arab Emirates", code: "+971" },
        { country: "United Kingdom", code: "+44" },
        { country: "United States", code: "+1" },
        { country: "Uruguay", code: "+598" },
        { country: "Uzbekistan", code: "+998" },
        { country: "Vanuatu", code: "+678" },
        { country: "Vatican City", code: "+39" },
        { country: "Venezuela", code: "+58" },
        { country: "Vietnam", code: "+84" },
        { country: "Yemen", code: "+967" },
        { country: "Zambia", code: "+260" },
        { country: "Zimbabwe", code: "+263" },
    ];

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
        City: '',
        description: '',
        pincode: '',
        address: '',
        CountryID: '',
        StateID: '',
    }

    const [values, setValues] = useState(initialValues);
    const [investorvalues, setInvestorValues] = useState(investorInitialValue);

    const [customActiveTab, setCustomActiveTab] = useState('1');
    const [images, setImages] = useState([]);
    const [addMore, setAddMore] = useState(false)

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
    const fetchStages= async () => {
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

    }, [])

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
    setRegisterData([])};

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
        if (!values.logo) {
            errors.logo = 'Company Logo is required';
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
            errors.contactPersonName = 'Contact Person Name is required';
        }
        if (!investorvalues.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(investorvalues.email)) {
            errors.email = 'Invalid Email address!';
        }
        if (!investorvalues.contactNo && !investorvalues.countryCode) {
            errors.contactNo = 'Contact Number and country code is required';
        }
        if (!investorvalues.contactNo) {
            errors.contactNo = 'Contact Number is required';
        } else if (!contactRegex.test(investorvalues.contactNo)) {
            errors.contactNo = 'Invalid Mobile Number!';
        }
        if (!investorvalues.companyName) {
            errors.companyName = 'Startup name is required';
        }

        if (!investorvalues.countryCode) {
            errors.countryCode = 'Country Code is required';
        }


        if (!investorvalues.pincode) {
            errors.pincode = 'Pincode is required';
        }
        if (!investorvalues.address) {
            errors.address = 'Address is required';
        }
        if (!investorvalues.CountryID) {
            errors.CountryID = 'Country is required';
        }
        if (!investorvalues.StateID) {
            errors.StateID = 'State is required';
        }
        if (!investorvalues.description) {
            errors.description = 'Brief About Startup is required';
        }

        if (!investorvalues.terms) {
            errors.terms = 'Please accept the terms and conditions';
        }
        setInvestorFormErrors(errors);
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
            const formData = new FormData();
            console.log(values)
            formData.append("contactPersonName", values.contactPersonName);
            formData.append("email", values.email);
            formData.append("contactNo", values.contactNo);
            formData.append("countryCode", values.countryCode.value);
            formData.append("companyName", values.companyName);
            formData.append("founderName", values.founderName);
            formData.append("categoryId", values.categoryId.value);
            formData.append("stageOfStartup", values.stageOfStartup.value);
            formData.append("teamSize", values.teamSize);
            formData.append("City", values.City);
            formData.append("description", values.description);
            formData.append("legalName", values.legalName);
            formData.append("yearFounded", values.yearFounded);
            formData.append("terms", values.terms);
            formData.append("pincode", values.pincode);
            formData.append("address", values.address);
            formData.append("CountryID", values.CountryID.value);
            formData.append("StateID", values.StateID.value);
            formData.append("participantCategoryId", participant);
            formData.append("ticketId", ticketId);

            // Handle file uploads
            if (values.logo) {
                formData.append("logo", values.logo);
            }
            if (values.brochure) {
                formData.append("brochure", values.brochure);
            }
            if (values.productImages) {
                formData.append("productImages", values.productImages);
            }

            try {
                const res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/create/StartUpDetailsMaster`, formData);
                if (res.data.isOk) {
                    setAddMore(false)
                    // alert("Form submitted successfully")
                    alert("Form submitted successfully")
                    console.log(res)
                    console.log(registerData)
                    setRegisterData((prevData) => [...prevData, res.data.data]);
                    

                    try{
                        const data={
                            email:res.data.data.email,
                            password:res.data.data.password
                        }
                        const res2 = await axios.post(`${process.env.REACT_APP_URL}/api/sendOTPEmail`, data);
                        console.log("res",res2)
                        if(res2.data.isOk)
                        {
                            alert(res2.data.message)
                        }
                    }
                    catch(error)
                    {
                        console.error("An error occurred during submission:", error.message);
                    }
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

    // useEffect(() => {
    //     handleShow()
    // }, [registerData])

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
                City: investorvalues.City,
                description: investorvalues.description,
                pincode: investorvalues.pincode,
                address: investorvalues.address,
                CountryID: investorvalues.CountryID.value,
                StateID: investorvalues.StateID.value,
                participantCategoryId: participant,
                ticketId: ticketId
            }
            // Handle file uploads


            try {
                let res
                if (isInvestor === true) { res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/investor`, data); }
                else if (isInvestor == false) {
                    res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/visitor`, data);
                }
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
    // const stages = [
    //     { value: 'Ideation', label: 'Ideation' },
    //     { value: 'PoC/MVP', label: 'PoC/MVP' },
    //     { value: 'Early Revenue', label: 'Early Revenue' },
    //     { value: 'Revenue', label: 'Revenue' },
    //     { value: 'Growth', label: 'Growth' },
    // ]

    return (
        <React.Fragment>
            <div className="register-bg">
                <Row className="w-100">
                    <Col lg={5}>
                        <img src={bg} className="w-100 form-img" alt="Background" />
                    </Col>
                    <Col lg={6}>
                        <div className="form-padding pb-4">
                            <h3 className="title mt-4 mb-1 pt-4">Register</h3>
                            <h5 className="para-custom">Let us know what you are seeking as</h5>

                            <Nav tabs className="nav-tabs-custom nav-success nav-justified mb-3">
                                <NavItem className="f-15 pb-0">
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({ active: customActiveTab === "1" })}
                                        onClick={() => {
                                            toggleCustom("1")
                                            setPaticipantId("66deba1c8d13756fe2697beb")
                                            setTicketId('66e162ee158fdfa7198f4765')
                                            // setValues(initialValues)
                                        }}
                                    >
                                        Pitcher
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
                                        Start-Up
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
                            </Nav>

                            <TabContent activeTab={customActiveTab}>

                                <TabPane tabId="1">
                                    <div>
                                        <StartupForm
                                            values={values}
                                            handleChange={handleChange}
                                            handleFileChange={handleFileChange}
                                            formErrors={formErrors}
                                            isSubmit={isSubmit}
                                            handleSubmit={handleSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setValues={setValues}
                                            isdCodes={isdCodes}
                                            categories={categories}
                                            stages={stages}
                                        />
                                    </div>
                                </TabPane>


                                <TabPane tabId="2">
                                    <div>
                                        <StartupForm
                                            values={values}
                                            handleChange={handleChange}
                                            handleFileChange={handleFileChange}
                                            formErrors={formErrors}
                                            isSubmit={isSubmit}
                                            handleSubmit={handleSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setValues={setValues}
                                            isdCodes={isdCodes}
                                            categories={categories}
                                            stages={stages}
                                        />
                                    </div>
                                </TabPane>


                                <TabPane tabId="3">
                                    <div>
                                        <InvestorForm
                                            investorvalues={investorvalues}
                                            handleInvestorChange={handleInvestorChange}

                                            InvestorformErrors={InvestorformErrors}
                                            isSubmit={isSubmit}
                                            handleInvestorSubmit={handleInvestorSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setInvestorValues={setInvestorValues}
                                            isdCodes={isdCodes}

                                        />
                                    </div>

                                </TabPane>
                                <TabPane tabId="4">
                                    <div>
                                        <InvestorForm
                                            investorvalues={investorvalues}
                                            handleInvestorChange={handleInvestorChange}

                                            InvestorformErrors={InvestorformErrors}
                                            isSubmit={isSubmit}
                                            handleInvestorSubmit={handleInvestorSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setInvestorValues={setInvestorValues}
                                            isdCodes={isdCodes}

                                        />
                                    </div>

                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
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
                        <span>Event Pass</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Here is your pass for event access
                    <Row className='scroll-hori'>
                        {console.log(registerData)}
                        <Col lg={6}>
                            {registerData.map((items, index) => {
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
                                                    <h5>{items.contactPersonName}</h5>
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
                            onClick={() => setAddMore(true)}
                            className="no-style"
                            >+ Add Attendees</Button>
                            {addMore && (
                                (customActiveTab === '1' || customActiveTab === '2') ? (
                                    <div>
                                        <StartupForm
                                            values={values}
                                            handleChange={handleChange}
                                            handleFileChange={handleFileChange}
                                            formErrors={formErrors}
                                            isSubmit={isSubmit}
                                            handleSubmit={handleSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setValues={setValues}
                                            isdCodes={isdCodes}
                                            categories={categories}
                                            stages={stages}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <InvestorForm
                                            investorvalues={investorvalues}
                                            handleInvestorChange={handleInvestorChange}
                                            InvestorformErrors={InvestorformErrors}
                                            isSubmit={isSubmit}
                                            handleInvestorSubmit={handleInvestorSubmit}
                                            country={country}
                                            states={states}
                                            fetchState={fetchState}
                                            setInvestorValues={setInvestorValues}
                                            isdCodes={isdCodes}
                                        />
                                    </div>
                                )
                            )}

<div>
                <Button type="button" color="primary" className="mt-3 register-btn">Proceed to Checkout</Button>
            </div>

                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>

        </React.Fragment>
    );
};

export default Register;
