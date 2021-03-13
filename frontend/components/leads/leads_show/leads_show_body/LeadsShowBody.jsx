import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody({ currentUser, selectedLead }) {
    return (
        <div className='leads-show-body-container'>
            {/* property details  */}
            <LeadsShowDetailsContainer selectedLead={selectedLead.lead} currentUser={currentUser}/>
            {/* agent contact/log  */}
            <LeadShowContactContainer agent={selectedLead.agent} property_id={selectedLead.lead.id} currentUser={currentUser}/>
            
        </div>
    )
}

export default LeadsShowBody
