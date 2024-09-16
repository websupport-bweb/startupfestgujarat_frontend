import React, { useState } from "react";
import { Button } from "reactstrap";
import Select from "react-select";
import axios from "axios";

const VisitorForm = ({ investorvalues, handleInvestorChange, InvestorformErrors, isSubmit, handleInvestorSubmit, setInvestorValues, isdCodes }) => {
    return (
        <div>
            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="contactPersonName">
                    Name<span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    name="contactPersonName"
                    className="form-control bg-light"
                    value={investorvalues.contactPersonName}
                    onChange={handleInvestorChange}
                />
                {isSubmit && InvestorformErrors.contactPersonName && (
                    <p className="text-danger f-13">{InvestorformErrors.contactPersonName}</p>
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
                    value={investorvalues.email}
                    onChange={handleInvestorChange}
                />
                {isSubmit && InvestorformErrors.email && (
                    <p className="text-danger f-13">{InvestorformErrors.email}</p>
                )}
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="f-13 fw-bold" htmlFor="countryCode">
                        Country Code<span className="text-danger">*</span>
                    </label>
                    <Select
                        name="countryCode"
                        className="p-0 b-0 form-control bg-light"
                        value={investorvalues.countryCode}
                        // onChange={handleChange}
                        onChange={(e) => {
                            setInvestorValues({
                                ...investorvalues,
                                countryCode: e
                            })
                        }}
                        options={isdCodes.map((item) => ({
                            value: item.code,
                            label: `${item.country} (${item.code})`,
                        }))}
                    >
                        {isdCodes.map(({ country, code }) => (
                            <option key={code} value={code}>
                                {`${country} (${code})`}
                            </option>
                        ))}
                    </Select>
                    {isSubmit && InvestorformErrors.countryCode && (
                        <p className="text-danger f-13">{InvestorformErrors.countryCode}</p>
                    )}
                </div>
                <div className="mb-3 col-md-8">
                    <label className="f-13 fw-bold" htmlFor="contactNo">
                        Contact Number<span className="text-danger">*</span>
                    </label>
                    <input
                        type="number"
                        name="contactNo"
                        className="form-control bg-light"
                        value={investorvalues.contactNo}
                        onChange={handleInvestorChange}
                    />
                    {isSubmit && InvestorformErrors.contactNo && (
                        <p className="text-danger f-13">{InvestorformErrors.contactNo}</p>
                    )}
                </div>
              
                
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        name="terms"
                        className="form-check-input"
                        checked={investorvalues.terms}
                        onChange={handleInvestorChange}
                    />
                    <label className="f-13 fw-bold form-check-label" htmlFor="terms">
                        I agree to the Terms & Conditions<span className="text-danger">*</span>
                    </label>
                    {isSubmit && InvestorformErrors.terms && (
                        <p className="text-danger f-13">{InvestorformErrors.terms}</p>
                    )}
                </div>
                <div>
                    <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleInvestorSubmit}>Register</Button>
                </div>


            </div>
        </div>
    );
};

export default VisitorForm;
