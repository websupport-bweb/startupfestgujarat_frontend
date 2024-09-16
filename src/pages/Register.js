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
import isdCodes from "../components/CountryCode"

const Register = () => {

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

    const handleCheckout = async () => {
        // const startupIds = registerData.map(item => item._id);
        const ticketIds = registerData.map(item => item.ticketId);
        const {data: {order}} = await axios.post(`${process.env.REACT_APP_URL}/api/auth/payment/checkout`, { amount : 100, startupIds: registerData, ticketIds})

        console.log("checout order",order);
    
        const options = {
            // key: `${process.env.RAZORPAY_KEY_ID}`,
            key: "rzp_test_qoZrYXqkyGbjef",
            amount: order.amount,
            currency: "INR",
            name: 'Startupfest Gujarat',
            description: 'Test Transaction',
            order_id: order.id, 
            callback_url: `${process.env.REACT_APP_URL}/api/auth/payment/paymentVerification`, 
            prefill: {
              name: 'Gaurav Kumar',
              email: 'gaurav.kumar@example.com',
              contact: '9999999999'
            },
            theme: {
              color: '#F37254'
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
    
    }



    return (
        <React.Fragment>
            <div className="register-bg register-form">
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
                        <span>Event Pass</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Here is your pass for event access
                    <Row className='scroll-hori'>
                        {/* {console.log(registerData)} */}
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
                                <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleCheckout} >Proceed to Checkout</Button>
                            </div>

                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>

        </React.Fragment>
    );
};

export default Register;
