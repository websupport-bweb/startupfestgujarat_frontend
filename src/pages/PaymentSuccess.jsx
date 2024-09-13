import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {

    const query = useSearchParams()[0];
    const refeNum = query.get("reference");
    return (
        <React.Fragment>
            <div className="text-center" >
                <h4>PAYMENT SUCCESS</h4>
                <p>Reference No. {refeNum}</p>
            </div>

        </React.Fragment>
    )
}

export default PaymentSuccess;