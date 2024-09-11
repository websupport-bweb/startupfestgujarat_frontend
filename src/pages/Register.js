import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Input, Label, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import bg from '../assets/img/register_bg.png';
import Select from "react-select";
import axios from 'axios'



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

    const [values, setValues] = useState({
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
        productImages: ''
    });

    const [customActiveTab, setCustomActiveTab] = useState('1');
    const [images, setImages] = useState([]);

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
    const [states, setStates]=useState([])
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
    useEffect(() => {

        fetchData()
        fetchCountry()

    }, [])

    const handleChange = (e) => {
        console.log(e)
        
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
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


    const handleSubmit = async(e) => {
        setIsSubmit(true);
        console.log("ll");

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
            formData.append("participantCategoryId", '66deba2b8d13756fe2697bee');
        
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

            try{
                const res= await axios.post(`${process.env.REACT_APP_URL}/api/auth/create/StartUpDetailsMaster`, formData);
                if(res.data.isOk)
                {
                    alert("Form submitteed successfully")
                }
                else{
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

    const stages =[
        {value:'Initial', label:'Initial'},
        {value:'Growth', label:'Growth'},
    ]

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
                                        onClick={() => { toggleCustom("1") }}
                                    >
                                        Pitcher
                                    </NavLink>
                                </NavItem>
                                <NavItem className="f-15 pb-0">
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({ active: customActiveTab === "2" })}
                                        onClick={() => toggleCustom("2")}
                                    >
                                        Start-Up
                                    </NavLink>
                                </NavItem>
                                <NavItem className="f-15 pb-0">
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({ active: customActiveTab === "3" })}
                                        onClick={() => toggleCustom("3")}
                                    >
                                        Investor/Visitor
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={customActiveTab}>
                                <TabPane tabId="2">
                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="contactPersonName">
                                            Name<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="contactPersonName"
                                            className="form-control bg-light"
                                            value={values.contactPersonName}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.contactPersonName && (
                                            <p className="text-danger f-13">{formErrors.contactPersonName}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="email">
                                            Email<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control bg-light"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.email && (
                                            <p className="text-danger f-13">{formErrors.email}</p>
                                        )}
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label className="f-13 fw-bold" htmlFor="countryCode">
                                                Country Code
                                            </label>
                                            <Select
                                                name="countryCode"
                                                className="p-0 b-0 form-control bg-light"
                                                value={values.countryCode}
                                                // onChange={handleChange}
                                                onChange={(e)=>{ setValues({
                                                    ...values,
                                                    countryCode: e
                                                })}}
                                                options={isdCodes.map((item ) => ({
                                                    value:item.code ,
                                                    label: `${item.country} (${item.code})`,
                                                  }))}
                                            >
                                                {isdCodes.map(({ country, code }) => (
                                                    <option key={code} value={code}>
                                                        {`${country} (${code})`}
                                                    </option>
                                                ))}
                                            </Select>
                                            {isSubmit && formErrors.countryCode && (
                                                <p className="text-danger f-13">{formErrors.countryCode}</p>
                                            )}
                                        </div>
                                        <div className="col-md-8">
                                            <label className="f-13 fw-bold" htmlFor="contactNo">
                                                Contact Number
                                            </label>
                                            <input
                                                type="text"
                                                name="contactNo"
                                                className="form-control bg-light"
                                                value={values.contactNo}
                                                onChange={handleChange}
                                            />
                                            {isSubmit && formErrors.contactNo && (
                                                <p className="text-danger f-13">{formErrors.contactNo}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="companyName">
                                            Startup name<span className="text-danger">*</span> <span className="text-muted-grey">(The official name of the startup)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            className="form-control bg-light"
                                            value={values.companyName}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.companyName && (
                                            <p className="text-danger f-13">{formErrors.companyName}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="founderName">
                                            Founder name<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="founderName"
                                            className="form-control bg-light"
                                            value={values.founderName}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.founderName && (
                                            <p className="text-danger f-13">{formErrors.founderName}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="categoryId">
                                            Industry/Sector<span className="text-danger">*</span>
                                        </label>
                                        <Select
                                            name="categoryId"
                                            className="p-0 form-control bg-light"
                                            value={values.categoryId}
                                            // onChange={handleChange}
                                            onChange={(e)=>{ setValues({
                                                ...values,
                                                categoryId: e
                                            })}}
                                            options={categories.map((item) => ({
                                                value: item._id,
                                                label: item.categoryName,
                                              }))}
                                        >
                                            {/* <option value=""></option>
                                            {categories.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.categoryName}
                                                </option>
                                            ))} */}
                                        </Select>
                                        {isSubmit && formErrors.categoryId && (
                                            <p className="text-danger f-13">{formErrors.categoryId}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="stageOfStartup">
                                            Stage of Startup<span className="text-danger">*</span>
                                        </label>
                                        <Select
                                            name="stageOfStartup"
                                            className="p-0 form-control bg-light"
                                            value={values.stageOfStartup}
                                            // onChange={handleChange}
                                            onChange={(e)=>{ setValues({
                                                ...values,
                                                stageOfStartup: e
                                            })}}
                                            options={stages.map((item) => ({
                                                value: item.value,
                                                label: item.label,
                                              }))}
                                        >
                                            {/* <option value=""></option>
                                            <option value="seed">Initial</option>
                                            <option value="growth">Growth</option> */}
                                        </Select>
                                        {isSubmit && formErrors.stageOfStartup && (
                                            <p className="text-danger f-13">{formErrors.stageOfStartup}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="teamSize">
                                            Current Team Size<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="teamSize"
                                            className="form-control bg-light"
                                            value={values.teamSize}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.teamSize && (
                                            <p className="text-danger f-13">{formErrors.teamSize}</p>
                                        )}
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <label className="f-13 fw-bold" htmlFor="CountryID">
                                                Country<span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                name="CountryID"
                                                className="p-0 form-control bg-light"
                                                value={values.CountryID}
                                                // onChange={handleChange}
                                                onChange={(e)=>{ 
                                                    setValues({
                                                    ...values,
                                                    CountryID: e
                                                })
                                                fetchState(e.value)}}
                                                options={country.map((item) => ({
                                                    value: item._id,
                                                    label: item.CountryName,
                                                  }))}
                                            >
                                                {/* <option value=""></option>
                                            {country.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.CountryName}
                                                </option> 
                                            ))}*/}
                                            </Select>
                                            {isSubmit && formErrors.CountryID && (
                                                <p className="text-danger f-13">{formErrors.CountryID}</p>
                                            )}
                                        </div>
                                        <div className="col">
                                            <label className="f-13 fw-bold" htmlFor="StateID">
                                                State<span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                name="StateID"
                                                className="p-0 form-control bg-light"
                                                value={values.StateID}
                                                onChange={(e)=>{ setValues({
                                                    ...values,
                                                    StateID: e
                                                })}}
                                                options={states.map((item) => ({
                                                    value: item._id,
                                                    label: item.StateName,
                                                  }))}
                                            >
                                               
                                            {/* {states.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.StateName}
                                                </option>
                                            ))} */}
                                            </Select>
                                            {isSubmit && formErrors.StateID && (
                                                <p className="text-danger f-13">{formErrors.StateID}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <label className="f-13 fw-bold" htmlFor="City">
                                                City of Operation
                                            </label>
                                            <input
                                                type="text"
                                                name="City"
                                                className="form-control bg-light"
                                                value={values.City}
                                                onChange={handleChange}
                                            />
                                            {isSubmit && formErrors.City && (
                                                <p className="text-danger f-13">{formErrors.City}</p>
                                            )}
                                        </div>
                                        <div className="col">
                                            <label className="f-13 fw-bold" htmlFor="pincode">
                                                PinCode<span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                className="form-control bg-light"
                                                value={values.pincode}
                                                onChange={handleChange}
                                            />
                                            {isSubmit && formErrors.pincode && (
                                                <p className="text-danger f-13">{formErrors.pincode}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="address">
                                            Address<span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            name="address"
                                            className="form-control bg-light"
                                            value={values.address}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.address && (
                                            <p className="text-danger f-13">{formErrors.address}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                    <div className="">
                                            <label className="f-13 fw-bold" htmlFor="legalName">
                                                Legal name of Company
                                            </label>
                                            <input
                                                type="text"
                                                name="legalName"
                                                className="form-control bg-light"
                                                value={values.legalName}
                                                onChange={handleChange}
                                            />
                                            {isSubmit && formErrors.legalName && (
                                                <p className="text-danger f-13">{formErrors.legalName}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    
                                            <label className="f-13 fw-bold" htmlFor="yearFounded">
                                               Year of Establishment
                                            </label>
                                            <input
                                                type="text"
                                                name="yearFounded"
                                                className="form-control bg-light"
                                                value={values.yearFounded}
                                                onChange={handleChange}
                                            />
                                            {isSubmit && formErrors.yearFounded && (
                                                <p className="text-danger f-13">{formErrors.yearFounded}</p>
                                            )}
                                        </div>
                                    
                                    

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="description">
                                            Brief About Startup<span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            name="description"
                                            className="form-control bg-light"
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                        {isSubmit && formErrors.description && (
                                            <p className="text-danger f-13">{formErrors.description}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="logo">
                                            Company Logo<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="logo"
                                            className="form-control"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                        />
                                        {isSubmit && formErrors.logo && (
                                            <p className="text-danger f-13">{formErrors.logo}</p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="brochure">
                                            Brochure
                                        </label>
                                        <input
                                            type="file"
                                            name="brochure"
                                            className="form-control"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                        />

                                    </div>
                                    <div className="mb-3">
                                        <label className="f-13 fw-bold" htmlFor="productImages">
                                            Product Images
                                        </label>
                                        <input
                                            type="file"
                                            name="productImages"
                                            className="form-control"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                        />

                                    </div>

                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            className="form-check-input"
                                            checked={values.terms}
                                            onChange={handleChange}
                                        />
                                        <label className="f-13 fw-bold form-check-label" htmlFor="terms">
                                            I agree to the Terms & Conditions<span className="text-danger">*</span>
                                        </label>
                                        {isSubmit && formErrors.terms && (
                                            <p className="text-danger f-13">{formErrors.terms}</p>
                                        )}
                                    </div>
                                    <div>
                                        <Button type="submit" color="primary" className="mt-3 register-btn" onClick={handleSubmit}>Register</Button>
                                    </div>
                                </TabPane>


                                <TabPane tabId="3">
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            contactNo: '',

                                            terms: false
                                        }}
                                        // validationSchema={validationSchema}
                                        onSubmit={(values) => {
                                            // handle form submission logic

                                        }}
                                    >
                                        {({ setFieldValue }) => (
                                            <Form className="mt-4">
                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="name">Name<span className="text-danger">*</span></Label>
                                                    <Field name="name" className="form-control bg-light" />
                                                    <ErrorMessage name="name" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="email">Email<span className="text-danger">*</span></Label>
                                                    <Field name="email" type="email" className="form-control bg-light" />
                                                    <ErrorMessage name="email" component="div" className="text-danger f-13 mb-3" />
                                                </div>


                                                <div className="row mb-3">

                                                    <div className="col-md-4" style={{ zIndex: '1000' }}>
                                                        <Label for="contact" className="f-13 fw-bold">Country Code</Label>
                                                        <Field as="select" name="isdCode" className="form-control bg-light">
                                                            {/* <option value="">Select ISD Code</option> */}
                                                            {isdCodes.map(({ country, code }) => (
                                                                <option key={code} value={code}>
                                                                    {`${country} (${code})`}
                                                                </option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div className="">
                                                            <Label for="contact" className="f-13 fw-bold">Contact Number</Label>
                                                            {/* <Label className="f-13 fw-bold" for="contactNo">Phone<span className="text-danger">*</span></Label> */}
                                                            <Field name="contactNo" className="form-control bg-light" />
                                                            <ErrorMessage name="contactNo" component="div" className="text-danger f-13 mb-3" />
                                                        </div>
                                                    </div>
                                                </div>




                                                <div className="form-check">
                                                    <Field type="checkbox" name="terms" className="form-check-input" />
                                                    <Label className="f-13 fw-bold form-check-label" for="terms">
                                                        Accept Terms and Conditions
                                                    </Label>
                                                    <ErrorMessage name="terms" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <Button type="submit" color="primary" className="mt-3 register-btn" onClick={handleSubmit}>Register</Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Register;
