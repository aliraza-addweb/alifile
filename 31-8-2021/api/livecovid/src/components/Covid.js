import React, {useEffect, useState} from 'react'
import './covid.css'
const Covid = () => {

   const [login, setData] = useState([]);
  

    const getCovidData = async () =>{
        try{
            const res  = await fetch('https://api.github.com/users/hacktivist123');
            console.log(res);
            const actualData = await res.json();
            //const dates = new dates("2020-03-19");
            console.log(actualData.login);
            //const {GJ} = actualData.GJ;
            //console.log({GJ});
            setData(actualData.login);
            //setData(actualData.id);
            //this.setState({GJ});
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
   


    return (
        <>
        <section>
         <h1> Live</h1>
         <h2>Login</h2> 
         <ul>
             <li className="card">
                <div className="card-main">
                    <div className="card_inner">
                        <p className="card_name"><span> login</span>  </p>
                        <p className="card_total card_small">App</p>
                    </div>
                </div>
             </li>
       
             <li className="card">
                <div className="card-main">
                    <div className="card_inner">
                        <p className="card_name"><span> login </span>  </p>
                        <p className="card_total card_small">{ login }</p>
                    </div>
                </div>
             </li>
        
      
             <li className="card">
                <div className="card-main">
                    <div className="card_inner">
                        <p className="card_name"><span> id </span>  </p>
                        <p className="card_total card_small">{  }</p>
                    </div>
                </div>
             </li>
        </ul> 
        </section> 
        </>
    )
}

export default Covid
