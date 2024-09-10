import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Input, Label, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import bg from '../assets/img/register_bg.png';
import Select from "react-select";


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    startupName: Yup.string().required("Startup name is required"),
    founderName: Yup.string().required("Founder name is required"),
    industry: Yup.string().required("Industry is required"),
    stageOfStartup: Yup.string().required("Stage of startup is required"),
    teamSize: Yup.string().required("Team size is required"),
    cityOfOperation: Yup.string().required("City of operation is required"),
    aboutStartup: Yup.string().required("Brief about startup is required"),
    legalName: Yup.string().required("Legal name is required"),
    yearFounded: Yup.date().required("Year founded is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions")
});

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
    const [customActiveTab, setCustomActiveTab] = useState('1');
    const [images, setImages] = useState([]);

    const toggleCustom = tab => {
        if (customActiveTab !== tab) {
            setCustomActiveTab(tab);
        }
    };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };
    const handlelogoUpload = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };
    const handlebrochureUpload = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <React.Fragment>
            <div>
                <Row className="w-100">
                    <Col lg={5}>
                        <img src={bg} className="w-100 form-img" alt="Background" />
                    </Col>
                    <Col lg={6}>
                        <div className="form-padding">
                            <h3 className="title mt-4 mb-1">Register</h3>
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
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            phone: '',
                                            startupName: '',
                                            founderName: '',
                                            industry: '',
                                            stageOfStartup: '',
                                            teamSize: '',
                                            cityOfOperation: '',
                                            aboutStartup: '',
                                            legalName: '',
                                            yearFounded: '',
                                            terms: false
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values) => {
                                            // handle form submission logic
                                            console.log("Form Submitted: ", values, images);
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
                                                    {/* <Label className="f-13 fw-bold" for="phone">Phone<span className="text-danger">*</span></Label> */}
                                                    <Field name="phone" className="form-control bg-light" />
                                                    <ErrorMessage name="phone" component="div" className="text-danger f-13 mb-3" />
                                                </div>
                                                    </div>
                                                </div>


                                                

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="startupName">Startup name<span className="text-danger">*</span> <span className="text-muted-grey">(The official name of the startup)</span></Label>
                                                    <Field name="startupName" className="form-control bg-light" />
                                                    <ErrorMessage name="startupName" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="founderName">Founder name<span className="text-danger">*</span> <span className="text-muted-grey">(Name of the founders or co-founders)</span></Label>
                                                    <Field name="founderName" className="form-control bg-light" />
                                                    <ErrorMessage name="founderName" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="industry">Industry/Sector<span className="text-danger">*</span></Label>
                                                    <Field as="select" name="industry" className="form-control bg-light">
                                                        <option value=""></option>
                                                        <option value="tech">Tech</option>
                                                        <option value="health">Health</option>
                                                        {/* Add more options as required */}
                                                    </Field>
                                                    <ErrorMessage name="industry" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="stageOfStartup">Stage of Startup<span className="text-danger">*</span></Label>
                                                    <Field as="select" name="stageOfStartup" className="form-control bg-light">
                                                        <option value=""></option>
                                                        <option value="seed">Seed</option>
                                                        <option value="growth">Growth</option>
                                                        {/* Add more options as required */}
                                                    </Field>
                                                    <ErrorMessage name="stageOfStartup" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="teamSize">Current Team Size<span className="text-danger">*</span></Label>
                                                    <Field name="teamSize" className="form-control bg-light" />
                                                    <ErrorMessage name="teamSize" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="cityOfOperation">City of Operation<span className="text-danger">*</span></Label>
                                                    <Field name="cityOfOperation" className="form-control bg-light" />
                                                    <ErrorMessage name="cityOfOperation" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="aboutStartup">Brief About Startup<span className="text-danger">*</span></Label>
                                                    <Field name="aboutStartup" as="textarea" className="form-control bg-light" />
                                                    <ErrorMessage name="aboutStartup" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="logo">Company Logo<span className="text-danger">*</span></Label>
                                                    <Input
                                                        type="file"
                                                        id="logo"
                                                        name="logo"
                                                        // multiple
                                                        onChange={(event) => {
                                                            handlelogoUpload(event);
                                                            setFieldValue("logo", event.currentTarget.files);
                                                        }}
                                                        accept="image/*"
                                                    />
                                                    
                                                    <ErrorMessage name="productImages" component="div" className="text-danger f-13 mb-3" />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="brochure">Brochure</Label>
                                                    <Input
                                                        type="file"
                                                        id="brochure"
                                                        name="brochure"
                                                        multiple
                                                        onChange={(event) => {
                                                            handlebrochureUpload(event);
                                                            setFieldValue("brochure", event.currentTarget.files);
                                                        }}
                                                        // accept="image/*"
                                                    />
                                                    
                                                    
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="productImages">Product Image</Label>
                                                    <Input
                                                        type="file"
                                                        id="productImages"
                                                        name="productImages"
                                                        multiple
                                                        onChange={(event) => {
                                                            handleImageUpload(event);
                                                            setFieldValue("productImages", event.currentTarget.files);
                                                        }}
                                                        accept="image/*"
                                                    />
                                                     
                                                    <ErrorMessage name="productImages" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="legalName">Legal Name<span className="text-danger">*</span> <span className="text-muted-grey">(As per Incorporation Certificate)</span></Label>
                                                    <Field name="legalName" className="form-control bg-light" />
                                                    <ErrorMessage name="legalName" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="f-13 fw-bold" for="yearFounded">Year Founded<span className="text-danger">*</span> <span className="text-muted-grey">(The year the startup was established)</span></Label>
                                                    <Field name="yearFounded" type="date" className="form-control bg-light" />
                                                    <ErrorMessage name="yearFounded" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <div className="form-check">
                                                    <Field type="checkbox" name="terms" className="form-check-input" />
                                                    <Label className="f-13 fw-bold form-check-label" for="terms">
                                                        Accept Terms and Conditions
                                                    </Label>
                                                    <ErrorMessage name="terms" component="div" className="text-danger f-13 mb-3" />
                                                </div>

                                                <Button type="submit" color="primary" className="mt-3">Submit</Button>
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
