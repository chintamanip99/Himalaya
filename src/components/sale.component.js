import React,{Component} from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import Menu from './menu.component'
import '../css/sale.css';

class Customer extends Component
{
constructor(props)
{
    super(props);
    this.state={
        datatable:{
            columns:[
                {
                    label: 'FirstName',
                    field: 'fname',
                    width: 150,
                    attributes: {
                      'aria-controls': 'DataTable',
                      'aria-label': 'FirstName',
                    },
                  },
                  {
                    label: 'LastName',
                    field: 'lname',
                    width: 270,
                  },
                  {
                    label: 'Amount Paid',
                    field: 'paid',
                    width: 200,
                  },
                  {
                    label: 'Discount Provided',
                    field: 'discount',
                    sort: 'disabled',
                    width: 150,
                  },
                  {
                    label: 'Payment Type',
                    field: 'payment',
                    width: 270,
                  },
                  {
                    label: 'Time',
                    field: 'time',
                    width: 270,
                  },
            ],
            rows: [
                {
                  fname: 'Jon',
                  lname: 'Snow',
                  paid: 2000,
                  discount: 200,
                  payment: 'Google Pay',
                  time: '12:30pm',
                
                },
                {
                    fname: 'Jon',
                    lname: 'Snow',
                    paid: 2000,
                    discount: 200,
                    payment: 'Google Pay',
                    time: '12:30pm',
                  
                  },
                  {
                    fname: 'Jon',
                    lname: 'Snow',
                    paid: 2000,
                    discount: 200,
                    payment: 'Google Pay',
                    time: '12:30pm',
                  
                  },
                  {
                    fname: 'Jon',
                    lname: 'Snow',
                    paid: 2000,
                    discount: 200,
                    payment: 'Google Pay',
                    time: '12:30pm',
                  
                  },
                  {
                    fname: 'Jon',
                    lname: 'Snow',
                    paid: 2000,
                    discount: 200,
                    payment: 'Google Pay',
                    time: '12:30pm',
                  
                  },
                  {
                    fname: 'Jon',
                    lname: 'Snow',
                    paid: 2000,
                    discount: 200,
                    payment: 'Google Pay',
                    time: '12:30pm',
                  
                  },
                  {
                      fname: 'Jon',
                      lname: 'Snow',
                      paid: 2000,
                      discount: 200,
                      payment: 'Google Pay',
                      time: '12:30pm',
                    
                    },
                    {
                      fname: 'Jon',
                      lname: 'Snow',
                      paid: 2000,
                      discount: 200,
                      payment: 'Google Pay',
                      time: '12:30pm',
                    
                    },
                    {
                      fname: 'Jon',
                      lname: 'Snow',
                      paid: 2000,
                      discount: 200,
                      payment: 'Google Pay',
                      time: '12:30pm',
                    
                    },
                    {
                      fname: 'Jon',
                      lname: 'Snow',
                      paid: 2000,
                      discount: 200,
                      payment: 'Google Pay',
                      time: '12:30pm',
                    
                    },
                    {
                        fname: 'Jon',
                        lname: 'Snow',
                        paid: 2000,
                        discount: 200,
                        payment: 'Google Pay',
                        time: '12:30pm',
                      
                      },
                      {
                          fname: 'Jon',
                          lname: 'Snow',
                          paid: 2000,
                          discount: 200,
                          payment: 'Google Pay',
                          time: '12:30pm',
                        
                        },
                        {
                          fname: 'Jon',
                          lname: 'Snow',
                          paid: 2000,
                          discount: 200,
                          payment: 'Google Pay',
                          time: '12:30pm',
                        
                        },
                        {
                          fname: 'Jon',
                          lname: 'Snow',
                          paid: 2000,
                          discount: 200,
                          payment: 'Google Pay',
                          time: '12:30pm',
                        
                        },
                        {
                          fname: 'Jon',
                          lname: 'Snow',
                          paid: 2000,
                          discount: 200,
                          payment: 'Google Pay',
                          time: '12:30pm',
                        
                        },
                        {
                            fname: 'Jon',
                            lname: 'Snow',
                            paid: 2000,
                            discount: 200,
                            payment: 'Google Pay',
                            time: '12:30pm',
                          
                          },
                          {
                              fname: 'Jon',
                              lname: 'Snow',
                              paid: 2000,
                              discount: 200,
                              payment: 'Google Pay',
                              time: '12:30pm',
                            
                            },
                            {
                              fname: 'Jon',
                              lname: 'Snow',
                              paid: 2000,
                              discount: 200,
                              payment: 'Google Pay',
                              time: '12:30pm',
                            
                            },
                            {
                              fname: 'Jon',
                              lname: 'Snow',
                              paid: 2000,
                              discount: 200,
                              payment: 'Google Pay',
                              time: '12:30pm',
                            
                            },
                            {
                              fname: 'Jon',
                              lname: 'Snow',
                              paid: 2000,
                              discount: 200,
                              payment: 'Google Pay',
                              time: '12:30pm',
                            
                            },
                            {
                                fname: 'Jon',
                                lname: 'Snow',
                                paid: 2000,
                                discount: 200,
                                payment: 'Google Pay',
                                time: '12:30pm',
                              
                              },
                              {
                                  fname: 'Jon',
                                  lname: 'Snow',
                                  paid: 2000,
                                  discount: 200,
                                  payment: 'Google Pay',
                                  time: '12:30pm',
                                
                                },
                                {
                                  fname: 'Jon',
                                  lname: 'Snow',
                                  paid: 2000,
                                  discount: 200,
                                  payment: 'Google Pay',
                                  time: '12:30pm',
                                
                                },
                                {
                                  fname: 'Jon',
                                  lname: 'Snow',
                                  paid: 2000,
                                  discount: 200,
                                  payment: 'Google Pay',
                                  time: '12:30pm',
                                
                                },
                                {
                                  fname: 'Jon',
                                  lname: 'Snow',
                                  paid: 2000,
                                  discount: 200,
                                  payment: 'Google Pay',
                                  time: '12:30pm',
                                
                                },
                                {
                                    fname: 'Jon',
                                    lname: 'Snow',
                                    paid: 2000,
                                    discount: 200,
                                    payment: 'Google Pay',
                                    time: '12:30pm',
                                  
                                  },
                                  {
                                      fname: 'Jon',
                                      lname: 'Snow',
                                      paid: 2000,
                                      discount: 200,
                                      payment: 'Google Pay',
                                      time: '12:30pm',
                                    
                                    },
                                    {
                                      fname: 'Jon',
                                      lname: 'Snow',
                                      paid: 2000,
                                      discount: 200,
                                      payment: 'Google Pay',
                                      time: '12:30pm',
                                    
                                    },
                                    {
                                      fname: 'Jon',
                                      lname: 'Snow',
                                      paid: 2000,
                                      discount: 200,
                                      payment: 'Google Pay',
                                      time: '12:30pm',
                                    
                                    },
                                    {
                                      fname: 'Jon',
                                      lname: 'Snow',
                                      paid: 2000,
                                      discount: 200,
                                      payment: 'Google Pay',
                                      time: '12:30pm',
                                    
                                    },
              ],
        }
    }

    }
    
render()
{
    return(
      <div> 
        <Menu/>
        <div style={{backgroundColor:"black",fontSize:"15px",color:"green"}}>
        <MDBDataTableV5 className="table-responsive" style={{backgroundColor:"black",fontSize:"20px",color:"white"}} hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={this.state.datatable} searchTop searchBottom={false} />
        </div>
        <div style={{backgroundColor:"black",fontSize:"15px",color:"white"}}>
        <table  style={{width:"100%"}}>
            <tr style={{color:"red"}}>
                <th>Payment Type</th>
                <th>Amount Paid</th>
                <th>Discount Given</th>
            </tr>
  <tr>
    <th style={{color:"green"}}>Cash</th>
    <td>15000</td>
    <td>200</td>
  </tr>
  <tr>
    <th style={{color:"green"}}>Google Pay</th>
    <td>5000</td>
    <td>100</td>
  </tr>
  <tr>
    <th style={{color:"green"}}>Paytm</th>
    <td>1000</td>
    <td>300</td>
  </tr>
  <tr>
    <th style={{color:"green"}}>PhonePay</th>
    <td>150</td>
    <td>20</td>
  </tr>
  <tr>
    <th style={{color:"blue"}}>Total</th>
    <td style={{color:"blue"}}>35000</td>
    <td style={{color:"blue"}}>2500</td>
  </tr>
</table>
</div>

      </div>

    )
   
}
}
export default Customer;