import React from "react";
import Axios from "axios"
class ApiFetch extends React.Component {
    constructor(props) {
        super(props);
    this.state = { 
        myData : []
     }
    }

    componentDidMount(){
        // fetch("https://fakestoreapi.com/products")
        // .then(res => res.json())
        // .then(res => {
        //     // console.log(res);
        //     this.setState({myData:res})
            
        // })
        // .catch(err => alert(err))

        Axios.get("https://fakestoreapi.in/api/products")
        .then(res=>{
            this.setState({myData:res.data.products})
        })
        .catch(err => alert(err))
    }
    render() { 
        return ( 
            <>
            <h1>hello</h1>
            {this.state.myData.map((value,index)=>{
                return (<>
                <h1>{value.title}</h1>
                ${value.price}
                <img src={value.image} width={150} alt="" />
                <button disabled>Add to cart</button>
                </>)
            })}
            </>
         );
    }
}
 
export default ApiFetch;