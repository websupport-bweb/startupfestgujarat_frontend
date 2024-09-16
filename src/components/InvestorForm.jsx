import React, { useState } from "react";
import { Button } from "reactstrap";
import Select from "react-select";
import axios from "axios";

const InvestorForm = ({ investorvalues, handleInvestorChange, InvestorformErrors, isSubmit, handleInvestorSubmit, country, states, fetchState, setInvestorValues, isdCodes }) => {
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
                <div className="mb-3 col-md-6">
                    <label className="f-13 fw-bold" htmlFor="companyName">
                        Company name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        className="form-control bg-light"
                        value={investorvalues.companyName}
                        onChange={handleInvestorChange}
                    />
                    {/* {isSubmit && InvestorformErrors.companyName && (
                        <p className="text-danger f-13">{InvestorformErrors.companyName}</p>
                    )} */}
                </div>
                <div className="mb-3 col-md-6">
                    <label className="f-13 fw-bold" htmlFor="investmentAmount">
                        Investment Amount
                    </label>
                    <input
                        type="text"
                        name="investmentAmount"
                        className="form-control bg-light"
                        value={investorvalues.investmentAmount}
                        onChange={handleInvestorChange}
                    />
                    {/* {isSubmit && InvestorformErrors.companyName && (
                        <p className="text-danger f-13">{InvestorformErrors.companyName}</p>
                    )} */}
                </div>
                <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="description">
                        Brief About Company
                    </label>
                    <textarea
                        name="description"
                        className="form-control bg-light"
                        value={investorvalues.description}
                        onChange={handleInvestorChange}
                    />
                    {/* {isSubmit && InvestorformErrors.description && (
                        <p className="text-danger f-13">{InvestorformErrors.description}</p>
                    )} */}
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label className="f-13 fw-bold" htmlFor="CountryID">
                            Country<span className="text-danger">*</span>
                        </label>
                        <Select
                            name="CountryID"
                            className="p-0 form-control bg-light"
                            value={investorvalues.CountryID}
                            // onChange={handleChange}
                            onChange={(e) => {
                                setInvestorValues({
                                    ...investorvalues,
                                    CountryID: e
                                })
                                fetchState(e.value)
                            }}
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
                        {isSubmit && InvestorformErrors.CountryID && (
                            <p className="text-danger f-13">{InvestorformErrors.CountryID}</p>
                        )}
                    </div>
                    <div className="col">
                        <label className="f-13 fw-bold" htmlFor="StateID">
                            State<span className="text-danger">*</span>
                        </label>
                        <Select
                            name="StateID"
                            className="p-0 form-control bg-light"
                            value={investorvalues.StateID}
                            onChange={(e) => {
                                setInvestorValues({
                                    ...investorvalues,
                                    StateID: e
                                })
                            }}
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
                        {isSubmit && InvestorformErrors.StateID && (
                            <p className="text-danger f-13">{InvestorformErrors.StateID}</p>
                        )}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="f-13 fw-bold" htmlFor="City">
                            City<span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="City"
                            className="form-control bg-light"
                            value={investorvalues.City}
                            onChange={handleInvestorChange}
                        />
                        {isSubmit && InvestorformErrors.City && (
                            <p className="text-danger f-13">{InvestorformErrors.City}</p>
                        )}
                    </div>
                    <div className="col">
                        <label className="f-13 fw-bold" htmlFor="pincode">
                            PinCode
                        </label>
                        <input
                            type="text"
                            name="pincode"
                            className="form-control bg-light"
                            value={investorvalues.pincode}
                            onChange={handleInvestorChange}
                        />
                        {/* {isSubmit && InvestorformErrors.pincode && (
                            <p className="text-danger f-13">{InvestorformErrors.pincode}</p>
                        )} */}
                    </div>
                </div>

                <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="address">
                        Address
                    </label>
                    <textarea
                        name="address"
                        className="form-control bg-light"
                        value={investorvalues.address}
                        onChange={handleInvestorChange}
                    />
                    {/* {isSubmit && InvestorformErrors.address && (
                        <p className="text-danger f-13">{InvestorformErrors.address}</p>
                    )} */}
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

export default InvestorForm;
