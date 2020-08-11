import React,{Component} from 'react';
import { Link, NavLink, withRouter, Router } from 'react-router-dom';
import '../css/home.css';
import Menu from './menu.component'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './pdf.component';
import ReactDOM from 'react-dom';
import Pdf from "react-to-pdf";
import axios from 'axios';

class Home extends Component
{

constructor(props)
{
super(props)
console.log(sessionStorage.getItem('token'))
console.log(sessionStorage.getItem('username'))
if(sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('username') === 'undefined')
{
this.props.history.push('/')
}
this.state={
firstname:"",
lastname:"",
mobile:"",
items:[
{
"id":1,
"category":"",
"brand":"",
"quantity":"",
"price":0,
"deleteable":false
}
],
discount_given:0,
total_amount:0,
total_discount:0,
amount_payable:0,
payment_options:[],
categories:[],
brands:[]
}
}

get_pdf=(e)=> {
e.preventDefault();
axios("http://127.0.0.1:8000/reciept/", {
method: 'POST',
responseType: 'blob'
})
.then(response => {
const file = new Blob(
[response.data], 
{type: 'application/pdf'});
const fileURL = URL.createObjectURL(file);
window.open(fileURL);
})
.catch(error => {
console.log(error);
});
}


handleChange=(e)=>{
var data=e.target.value;
this.setState({
[e.target.name]:data
})
}




add_item=()=>{
let item={
"id":this.state.items.length+1,
"category":'',
"brand":'',
"quantity":'',
"price":0,
"deleteable":true,
}
let items=[...this.state.items,item];
this.setState({
items: items
});
};

delete_item=(e)=>{
let id=e.target.getAttribute('value');
let items=this.state.items.filter(item=>{
return parseInt(item.id)!==parseInt(id);
})
this.setState({
items: items
})
}


getBrands=(id)=>{
    const headers = {
        'Authorization': 'Token '+sessionStorage.getItem('token')
      }
      axios.get('http://127.0.0.1:8000/brands/get_brands/'+id+'/',{
        headers: headers
      })
      .then(response =>{
          console.log(response)
          this.setState({brands:response.data.Data})
      })
}


update_item=(e)=>{
let name=e.target.name
let id=e.target.getAttribute('id');

if(name === 'category')
{
    const selectedIndex = e.target.options.selectedIndex;
    // console.log(selectedIndex)
    // console.log(e.target.options[selectedIndex])
    id=(e.target.options[selectedIndex].getAttribute('id'));
    console.log(id);


    this.getBrands(id);
}
id=e.target.getAttribute('id');

const items=this.state.items.length?(this.state.items.map(item=>{ 
if(item.id == id)
{

item[name]=e.target.value;

return(item);
}
else
{
return(item);
}
})):([])
this.setState({
items:items
})


console.log('caught');
this.setState({
total_amount:this.find_amount()
})
}

find_amount=()=>{
var amount=0;
this.state.items.forEach((item)=>{
    let price=item.price
    let quantity=item.quantity
if(price == '')
{
    price=0;
}
if(quantity == '')
{
    quantity=1;
}
amount =parseInt(amount)+parseInt(price)*parseInt(quantity)
});
this.calculate(amount);
return amount;
}

calculate=(amount)=>{
let discount=this.state.discount_given;
if(discount == '')
{
    discount=0;
}
let reduced=(discount*amount/100)
let payable=amount-reduced;
document.getElementById('amount').value=payable;
}
componentDidUpdate=()=>{
    this.find_amount();
}
componentDidMount=()=>{
    const headers = {
        'Authorization': 'Token '+sessionStorage.getItem('token')
      }
      axios.get('http://127.0.0.1:8000/payments/',{
        headers: headers
      })
      .then(response =>{
          this.setState({payment_options:response.data.Data})
      })
      
      axios.get('http://127.0.0.1:8000/items/',{
        headers: headers
      })
      .then(response =>{
          console.log(response.data)
          console.log(response.data.Data)
          this.setState({categories:response.data.Data})
      })

      axios.get('http://127.0.0.1:8000/items/',{
        headers: headers
      })
      .then(response =>{
          console.log(response.data)
          console.log(response.data.Data)
          this.setState({categories:response.data.Data})
      })
      
}
render()
{
    const payments=this.state.payment_options.length?(this.state.payment_options.map(option =>{
        return(<option id={option.id}>{option.name}</option>)
        })):("");
        
        const categories=this.state.categories.length?(this.state.categories.map(category =>{
            return(<option id={category.id}>{category.name}</option>)
            })):("");

        const brands=this.state.brands.length?(this.state.brands.map(brand =>{
                return(<option id={brand.id}>{brand.name}</option>)
                })):("");

        console.log(categories)


const items=this.state.items.length?(this.state.items.map( item => { return (
<div key={item.id} className="input-group form-group items-list">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fa fa-shopping-cart"></i></span>
</div>
<select onChange={this.update_item} id={item.id} type="text" value={item.category} className="form-control item" name="category" placeholder="Item" required>{categories}</select>
<select onChange={this.update_item} id={item.id} type="text" value={item.brand} className="form-control item" name="brand" placeholder="Brand" required>{brands}</select>
<input autoComplete="off" onChange={this.update_item} id={item.id} type="number" value={item.quantity} className="form-control item" min="1" name="quantity" placeholder="Quantity/Pairs" required/>
<input autoComplete="off" onChange={this.update_item} id={item.id} type="number" value={item.price} className="form-control item" min="0" name="price" placeholder="Price" required/>
<div className="input-group-postpend">
{item.deleteable?(<span><i value={item.id} onClick={this.delete_item} className="fa fa-times-circle add-btn"></i></span>):(<span onClick={this.add_item} id="add-item" ><i className="fa fa-plus-circle add-btn"></i></span>)}
</div>
</div>
)})):("");   



return(

<div className="container">

<Menu></Menu>

<div className="d-flex justify-content-center h-100">
<div className="card float-left">

<div className="card-header">
<h3>Generate Reciept</h3>
</div>

<div className="card-body">
<form id="login_form">

<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fas fa-user"></i></span>
</div>
<input onChange={this.handleChange} type="text" value={this.state.firstname} className="form-control" id="firstname" name="firstname" placeholder="First Name" required/>	
</div>

<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fas fa-user"></i></span>
</div>
<input onChange={this.handleChange} type="text" className="form-control" value={this.state.lastname} id="lastname" name="lastname" placeholder="Last Name" required/>
</div>

<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fa fa-mobile"></i></span>
</div>
<input onChange={this.handleChange} type="tel" value={this.state.mobile} className="form-control" id="mobile" placeholder="Mobile Number" name="mobile" pattern="[0-9]{10}"required/>
</div>

<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fa fa-credit-card"></i></span>
</div>
<select onChange={this.handleChange} value={this.state.payment} name="payment" className="form-control">
{payments}
</select>
</div>

<div id="items-cart">
{items}
<div>

</div>
</div>

<div className="input-group form-group float-right price-tag">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fa fa-rupee"></i></span>
</div>
<input type="text" className="form-control" readOnly  id="amount"/>
</div>

<div className="input-group form-group float-right price-tag">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fa fa-percent"></i></span>
</div>
<input type="number" onChange={this.handleChange} name="discount_given" className="form-control" min="0" max="100"/>
</div>

<div className="form-group">
<input type="submit" onClick={this.get_pdf} value="Submit" className="btn-lg login_btn"/>
</div>

</form>
{/* <datalist id="items">
{categories}
</datalist> */}
</div>
</div>
</div>
</div>
)
}
}
export default Home;