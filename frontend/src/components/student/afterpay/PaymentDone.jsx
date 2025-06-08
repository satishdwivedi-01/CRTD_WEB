import React from 'react'
import { FiHeadphones, FiLock } from 'react-icons/fi';
import RegistrationCompleteBanner from './RegistrationCompleteBanner';
import JobBoardCard from '../dashboard/JobBoardCard';
import CareerGuidanceCard from '../dashboard/CareerGuidanceCard';
import WhiteShadowCard from './WhiteShadowCard';
import WhiteShadowCard2 from './WhiteShadowCard2';
import ResourcesTipsCard from './ResourcesTipsCard';

const PaymentDone = () => {
  return (
   <>
   <div ><RegistrationCompleteBanner/></div>
   <div><WhiteShadowCard/></div>

<div><WhiteShadowCard2/></div>
<div><ResourcesTipsCard/></div>




 <div>
  <div><JobBoardCard /></div>
  <div><CareerGuidanceCard /></div>
</div>



    </> 
);
  
}

export default PaymentDone