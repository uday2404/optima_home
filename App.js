import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import SideNav, { NavIcon}from '@trendmicro/react-sidenav';
import './App.css';
class App extends Component{
   render(){
      return(
         <div >
            <Navbar  dark color="light" fixed="top" >
                <NavbarBrand style={{color:'green'}}>OPTIMA <span style={{'font-size':'10pt', 'font-style':'italic', color:'black'}}>Pay Less, Save More</span></NavbarBrand>
                <Nav className="ml-auto" >
                    <NavItem><img src="./not.png"/><span style={{flexAlign:"auto"}}>|</span></NavItem>
                    <NavItem className="ml-3"><img src="./img-user.png"/></NavItem>
                    <NavItem className="ml-3"><img src="./ichome.png"/></NavItem>
                </Nav>
            </Navbar>
            <SideNav dark color="light">
                <br/><br/><br/><br/>
                
                <SideNav.Nav >
                  
                        
                        <img src="./ichome.png" />
                   
                    
                    <br/><br/><br/><br/><br/>
                        
                        <img src="./icwallet.png" />
                    
                    <br /><br/><br/><br/><br/>
                      
                        <img src="./report.png" />
                     
                    
                    </SideNav.Nav>
                
            </SideNav>
            <div className="content">
           <div className="container">
                <div className="row">
                        <div className="col-12 bckgrd">
                            <h3>My financials</h3>
                            <div style={{'background-image':'url(/img-banner.png)'}}>
                            
                                </div>
                            </div>
                    </div>
               </div>
               </div>
         </div>
      );
   }
}
export default App;