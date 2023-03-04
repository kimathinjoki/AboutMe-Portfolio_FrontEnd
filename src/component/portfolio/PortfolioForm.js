import React from "react";
import {GrAddCircle} from "react-icons/gr"
import  {HiChevronDoubleRight, HiChevronDoubleLeft} from "react-icons/hi"

function PortfolioForm(){
    return(
        <div>
            <h1>Portfolio Form</h1>
            <div id="portfolioContainer">
                
            <div className="login-wrap">
	            <div className="login-html">
		            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Bio</label>
		            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Qualifications</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Contact</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" clasNames="label">Address</label>
					<input id="pass" type="text" className="input" />
				</div>
                <div className="group">
					<label for="pass" clasNames="label">Country</label>
					<input id="pass" type="text" className="input" />
				</div>
				
				<div className="group">
                    <label for="pass" clasNames="label">Company/organization</label>
					<input id="pass" type="text" className="input" />
				</div>
                <div className="group">
					<input id="check" type="checkbox" className="check" checked />
					<label for="check"><span className="icon"></span> display bio info</label>
				</div>
				<div className="hr"></div>
				{/* <div className="foot-lnk">
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab"><HiChevronDoubleRight/></label>
				</div> */}
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Highest Education</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Professional Title</label>
					<input id="pass" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Experience</label>
					<input id="pass" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">skills</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="ADD+"/>
				</div>
				<div className="hr"></div>
				{/* <div className="foot-lnk">
					<label for="tab-1"></label>
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab"><HiChevronDoubleLeft/></label>
				</div> */}
			</div>
		        </div>
	        </div>
        </div>
                
            </div>
        </div>
    )
}

export default PortfolioForm;