import React, { useState } from 'react';

import PaymentPendingBanner from '../payment/PaymentPendingBanner';
import RegistrationPendingCard from '../payment/RegistrationPendingCard';
import TechCareerSection from './TechCareerSection';
import JobCards from './JobCards';
import JobBoardCard from './JobBoardCard';
import CareerGuidanceCard from './CareerGuidanceCard';
import All from './All';
import PremiumMembershipCard from '../payment/PremiumMembershipCard';
import CompleteMembershipHeader from '../payment/CompleteMembershipHeader';
import InactiveAccountNotice from '../payment/InactiveAccountNotice';
import PaymentDone from '../afterpay/PaymentDone';
import PaymentModal from '../payment/PaymentModal'; // import your modal

const Meeting = () => {
  const [showPremium, setShowPremium] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ flex: 1 }}>
        <div
          className="font-bold text-black"
          style={{
            width: 964,
            height: 36,
            position: 'absolute',
            top: 77,
            left: 380,
            fontFamily: 'Poppins, sans-serif',
            fontSize: 24,
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          Welcome, Rishu Raj!
        </div>
        {paymentDone ? (
          <PaymentDone />
        ) : (
          <>
            <div>
              <PaymentPendingBanner />
            </div>
            {!showPremium ? (
              <>
                <div>
                  <RegistrationPendingCard onPayNow={() => setShowPaymentModal(true)} />
                </div>
                <div>
                  <TechCareerSection />
                </div>
                <div>
                  <JobCards />
                </div>
                <div>
                  <JobBoardCard />
                </div>
                <div>
                  <CareerGuidanceCard />
                </div>
              </>
            ) : (
              <>
                <div><CompleteMembershipHeader/></div>
                <div className="mt-[20px]">
                  <PremiumMembershipCard />
                </div>
                <div className='mt-[30px]'>
                  <InactiveAccountNotice/>
                </div>
              </>
            )}
            {/* Show Payment Modal if needed */}
            <PaymentModal
              open={showPaymentModal}
              onClose={() => setShowPaymentModal(false)}
              onPayNow={() => {
                setShowPaymentModal(false);
                setPaymentDone(true);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Meeting;