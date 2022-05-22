import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center py-7 mb-5'>
            <h2 className='text-5xl text-bold  '>All summary</h2>
        <ul className="steps steps-vertical text-2xl text-bold">
            <li className="step step-primary mt-7">EXECUTIVE SUMMARY</li>
            <li className="step step-primary ">DESCRIPTION OF BUSINESS</li>
            <li className="step step-primary">SALES AND MARKETING</li>
            <li className="step step-primary">COMPETITION</li>
            <li className="step step-primary">MANAGEMENT</li>
            <li className="step step-primary">FUNDING REQUIREMENTS</li>
            <li className="step step-primary">FINANCIAL PROJECTIONS</li>
        </ul>
        </div>
    );
};

export default BusinessSummary;