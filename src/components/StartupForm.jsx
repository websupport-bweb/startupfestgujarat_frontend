import React, { useState } from "react";
import { Button } from "reactstrap";
import Select from "react-select";
import axios from "axios";

const StartupForm = ({
  values,
  handleChange,
  handleFileChange,
  formErrors,
  isSubmit,
  handleSubmit,
  country,
  states,
  fetchState,
  setValues,
  isdCodes,
  categories,
  stages,
}) => {
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
            Country Code<span className="text-danger">*</span>
          </label>
          <Select
            name="countryCode"
            className="p-0 b-0 form-control bg-light"
            value={values.countryCode}
            // onChange={handleChange}
            onChange={(e) => {
              setValues({
                ...values,
                countryCode: e,
              });
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
          {isSubmit && formErrors.countryCode && (
            <p className="text-danger f-13">{formErrors.countryCode}</p>
          )}
        </div>
        <div className="col-md-8">
          <label className="f-13 fw-bold" htmlFor="contactNo">
            Contact Number<span className="text-danger">*</span>
          </label>
          <input
            type="number"
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
          Startup name<span className="text-danger">*</span>{" "}
          <span className="text-muted-grey">
            (The official name of the startup)
          </span>
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
          onChange={(e) => {
            setValues({
              ...values,
              categoryId: e,
            });
          }}
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
          onChange={(e) => {
            setValues({
              ...values,
              stageOfStartup: e,
            });
          }}
          options={stages.map((item) => ({
            value: item._id,
            label: item.StageOfStartup,
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
            onChange={(e) => {
              setValues({
                ...values,
                CountryID: e,
              });
              fetchState(e.value);
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
            onChange={(e) => {
              setValues({
                ...values,
                StateID: e,
              });
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
          {isSubmit && formErrors.StateID && (
            <p className="text-danger f-13">{formErrors.StateID}</p>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className="f-13 fw-bold" htmlFor="City">
            City of Operation<span className="text-danger">*</span>
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
            Legal name of Company<span className="text-danger">*</span>
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
          Date of Establishment<span className="text-danger">*</span>
        </label>
        <input
          type="date"
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
          Company Logo
        </label>
        <input
          type="file"
          name="logo"
          className="form-control"
          onChange={handleFileChange}
          accept="image/*"
        />
        {/* {isSubmit && formErrors.logo && (
                    <p className="text-danger f-13">{formErrors.logo}</p>
                )} */}
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
          accept="application/pdf"
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
          I agree to the Terms & Conditions
          <span className="text-danger">*</span>
        </label>
        {isSubmit && formErrors.terms && (
          <p className="text-danger f-13">{formErrors.terms}</p>
        )}
      </div>
      <div>
        <Button
          type="button"
          color="primary"
          className="mt-3 register-btn"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default StartupForm;
