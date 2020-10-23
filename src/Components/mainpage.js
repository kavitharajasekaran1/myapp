// import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
// import pic1 from '../images/pic1.jpg';
// import "../../src/App.css"
// import CardProgress from "./progress"


// class Mainpage extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             value:"",
//             result:""
//         }
//     }
//     handleChange = e => {
//         // const re = /^[0-9\b]+$/;
//         const re =/[0-9]+(,[0-9]+)*/
//         e.preventDefault();
//         console.log(e.target.value)
//         if (e.target.value === '' || re.test(e.target.value)) {

//         var inputvalue = e.target.value;
//         inputvalue = inputvalue.replace(',','')
//         var result_calculation = (((Number(inputvalue))*(1.16))/100);
//         this.setState({value:e.target.value,result:result_calculation.toFixed(2)})
//         }

//     }
//     render() {
//         return (
//             <div  class="container">
//                 <section class="showcase">
//   <img src={pic1} alt="Picture"/>
//   <div class="overlay">
//   <h2 style={{ fontFamily: "sans-serif",fontWeight: "bold"}}>Lending Made Easy</h2>
//   <p>
// Earn upto-1.16%* a year  across a wide range of P2P sites with investUP    </p>
// <button type="button" class="btn btn-default">Get Started</button>

//   </div>
// </section>
// <br/>
// <br/>
// <div className="center row">
   
// <div className="" >
              
//   <p class="center" style={{fontSize: "15px",fontFamily:"sans-serif"}}> with &euro; <input type="text" size="10"  value={this.state.value} 
//                                 onChange={this.handleChange}>
//                                     </input>
//                                    <span> your Estimated earnings could be </span> <br/> &euro; <u> {this.state.result}</u>*  &ensp;per year with fees of just  <span >&euro;<u>-21.23</u> per year.</span> </p>
//                   <br/>
                  
//                   </div>
//                   <div>
//                       <p style={{fontSize:"15px",color:"#C0C0C0"}}>*Estimated earnings are based on -1.16% per annum before a tax and any potential losses. As with most forms of invesment
//                           peer to peer lending carries a degree or a risk to you capital; In this case, if borrowers were unable to repay their loans.
//                       </p>
//                   </div>
//                   <br/>
//                   <br/>
                  
//                   {/* <div class="row ml-5 col-md-12">
//                     <div class="col text-center"> 
//                     <div className=" mx-5 d-md-flex  justify-content-between mt-3"> */}
//                         <div>
// <CardProgress
//                     //className='col-md-12'
//                     color='#5d30cd'
//                     percentage={this.state.value}
                    
//                 />
//                 </div>
// </div>                    
                      
//                       {/* </div>
//                       </div>
//                       </div> */}






  






               


                
//             </div>
//         );
//     }
// }

// export default Mainpage;

import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import pic1 from '../images/pic1.jpg';
import "../../src/App.css"
import CardProgress from "./progress"


class Mainpage extends Component {
    constructor(props){
        super(props)
        this.state={
            value:"",
            result:""
        }
    }
    handleChange = e => {
        // const re = /^[0-9\b]+$/;
        const re =/[0-9]+(,[0-9]+)*/
        e.preventDefault();
        console.log(e.target.value)
        if (e.target.value === '' || re.test(e.target.value)) {

        var inputvalue = e.target.value;
        inputvalue = inputvalue.replace(',','')
        var result_calculation = (((Number(inputvalue))*(1.16))/100);
        this.setState({value:e.target.value,result:result_calculation.toFixed(2)})
        }

    }
    render() {
        return (
            <div  class="container">
                <section class="showcase">
  <img src={pic1} alt="Picture"/>
  <div class="overlay">
  <h2 style={{ fontFamily: "sans-serif",fontWeight: "bold"}}>Lending Made Easy</h2>
  <p>
Earn upto-1.16%* a year  across a wide range of P2P sites with investUP    </p>
<button type="button" class="btn btn-default">Get Started</button>

  </div>
</section>
<br/>
<br/>
<div className="">
   
<div className="" >
              
  <p class="center" style={{fontSize: "15px",fontFamily:"sans-serif"}}> with &euro; <input type="text" size="10"  value={this.state.value} 
                                onChange={this.handleChange}>
                                    </input>
                                    your Estimated earnings could be  <br/> &euro; <span style={{color:"#0B6623"}}><u> {this.state.result}</u></span>*  &ensp;per year with fees of just  <span >&euro;<u>-21.23</u> per year.</span> </p>
                  <br/>
                  
                  </div>
                  <div>
                      <p style={{fontSize:"15px",color:"	#C0C0C0"}}>*Estimated earnings are based on -1.16% per annum before a tax and any potential losses. As with most forms of invesment
                          peer to peer lending carries a degree or a risk to you capital; In this case, if borrowers were unable to repay their loans.
                      </p>
                  </div>
                  <br/>
                  
                  
                  {/* <div class="row ml-5 col-md-12">
                    <div class="col text-center"> 
                    <div className=" mx-5 d-md-flex  justify-content-between mt-3"> */}
                        <div>
<CardProgress
                    //className='col-md-12'
                    color='#5d30cd'
                    percentage={this.state.value}
                    
                />
                </div>
</div>                    
                      
                      {/* </div>
                      </div>
                      </div> */}






  






               


                
            </div>
        );
    }
}

export default Mainpage;