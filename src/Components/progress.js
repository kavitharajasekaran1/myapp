
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from  '@material-ui/core/LinearProgress';

 


/** ***
 Purpose:
 The purpose of this function show the card inside the text and progress bar
 Parameter: {
     intiallMessage, color, percentage, text1, text2,
 }
 Return: string
 */
 function CardProgress({  color, percentage,className}) {
     var MIN =100;
     var MAX = 250000;
     var value = Number(percentage.replace(',',""))
     const normalise = function(value1)
     {
         console.log(value1,"value")
         value1 = Number(value1) 
        if (value1 < 100){
            value1 =100
        }
        if(value1>250000){
            value1=250000
        }

        
          var t = (value1-MIN)*100 /(MAX - MIN)
     
          console.log(t,"fdsfdsfsdfd")
        // if(t>100){
        //    t= t % 100;
        //    if(t==0){
        //        t = 100;
        //            }
        //          } 
     
     console.log(t)
     return t
     }
     console.log(normalise,"normaize")

    const BorderLinearProgress = withStyles((theme) => (
        console.log("theme==>", theme),
        {
            root: {
                height: 10,
                borderRadius: 15,
            },
            bar: {
                borderRadius: 5,
                // -webkit-filter: blur(10px),
                // filter: blur(10px);
                backgroundColor: color
            },
        }))(LinearProgress);
    return (
            <div className={`card col crucible-inspection ${className}`}>
                <div className="ml-2 mt-2 mb-2">
                                         <label  className="mb-0 cardText"></label> 
                                         <div class="col-md-12 row">
  <div class="col-md-2" style={{color:"#696969"}}>&euro;500</div>
  <div class="col-md-4" style={{color:"#696969"}}>&euro;1000</div>
  <div class="col-md-6" style={{color:"#696969"}}>&euro;25000</div>
</div>

                    <div className="d-flex justify-content-between">
                    

                        <BorderLinearProgress className="col-md-9 mt-2 mb-0" variant="determinate" value={normalise(percentage.replace(',',''))} />
                    </div>
                    <br/>
                    
                    <label className="mb-0 mt-1 percent" >&euro;{`${percentage}`}</label>

                    {/* <label  className="mb-0 cardText">{text1}</label>
                    <br/>
                    <label className="mb-0 cardText">{text2}</label> */}
                </div>
            </div>
    );
}
export default CardProgress