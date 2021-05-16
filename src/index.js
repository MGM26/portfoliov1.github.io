import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Picture from './Picture';
import Gen_info from './Gen_info';
import Contact from './contact';
import Education from './education';
import Skills from './Skills';
import Workex from './Workex';
import Certificates from './Certificates';
import Self from './Self';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
  	<div className=" column">
  		<div className="Top-row">
    		<Picture/>
    		<Gen_info/>
    	</div>
   		<div className="second-row">
    		<Contact/>
    		<Education/>
    	</div>	
    	<div className="row third-row">
        <div className="column">
    		  <Skills/>
          <Certificates/>
    		</div>
        <div className="column">
          <Workex/>
          <Self/>
        </div>
    	</div>
    </div>	

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
