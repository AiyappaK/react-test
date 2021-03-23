import React, { Component } from 'react';
import './Nav.css';
import { Navitems } from './Navitem';

class Nav extends Component{
    constructor(){
        super();
        this.state= ({collapse: false});
        this.handleClick = this.handleClick.bind(this);
    }

   Hamburger(){
       this.setState({collapse: !this.state.collapse});
   }

   handleClick(){
      this.Hamburger();
   }
    

    render(){
        return (
           <nav className='nav'>
               <h1 className='site-logo'>React
                   <i className='fa fa-dice'> </i>
               </h1>
               <div className='hamicon'>
               <span className={`hamicon ${this.state.collapse? 'fa fa-window-close':'fa fa-hamburger'}`} onClick={this.handleClick}></span>
               </div>
               <ul className={this.state.collapse? 'Nav-menu active':'Nav-menu'}>
                { Navitems.map((item, index)=>{
                    return(
                      <li key={index}>
                          <a className={item.cname} href={item.url}>{item.title}</a>
                      </li>
                    );
                })
                     
                }
               </ul>
                          </nav>
        );
    }

}

export
default
Nav;