import React,{Component} from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import Menu from './menu.component'
import axios from 'axios';

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
                  },
                  {
                    label: 'LastName',
                    field: 'lname',
                    width: 270,
                  },
                  {
                    label: 'Mobile',
                    field: 'mobile',
                    width: 200,
                  },
                  {
                    label: 'Date',
                    field: 'date',
                    sort: 'disabled',
                    width: 150,
                  }
            ],
            rows: [
              {
                fname:"dilip",
                lname:"joshi",
                mobile:"8975427620"
              }
            ],
        }
    }

    }

    update_rows=(response)=>{
      console.log(response)
      let columns=this.state.datatable.columns
      let rows=this.state.datatable.rows
      console.log(columns);
      console.log(rows);
      response.Data.results.forEach(element=>{rows.push(element)})
      console.log(columns);
      console.log(rows);
      let datatable={columns:columns,rows:rows}
      this.setState({datatable:datatable})
  } 
    get_next=(response)=>{

      console.log(response)
      const headers = {
        'Authorization': 'Token '+sessionStorage.getItem('token')
      }

        axios.get(response,{headers:headers})
        .then(result=>{
          // console.log(result.data.data.results)
          this.update_rows(result.data);
          if(result.data.Data.links.next != null)
          {
            this.get_next(result.data.Data.links.next)
          }
        })
      
    }
    
    componentDidMount=()=>{
      const headers = {
        'Authorization': 'Token '+sessionStorage.getItem('token')
      }
      axios.get('http://127.0.0.1:8000/customers/',{
        headers: headers
      })
      .then(response =>{
        this.update_rows(response.data);
        this.get_next(response.data.Data.links.next)
      })
      
    }
    
render()
{

        
 
    return(
      <div>
           <Menu/>
        <div style={{backgroundColor:"black",fontSize:"15px",color:"green"}}>
        <MDBDataTableV5 className="table-responsive" style={{textAlign:"left",backgroundColor:"black",fontSize:"20px",color:"white"}} hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={this.state.datatable} searchTop searchBottom={false} />
        </div>
      </div>

    )
   
}
}
export default Customer;