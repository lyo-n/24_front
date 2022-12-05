import Link from "next/Link";
import axios from "axios";
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:3005/api/accounts`)
  const accounts = await response.json()
  return {
      props: {accounts},
  }
}

const Accounts = ({accounts}) =>  {
    const [query, setQuery] = useState('');

    const handlePaid = async (_id) => {
      try {
          await axios.get(`http://localhost:3005/api/${_id}`);
          window.location.reload();
      } catch (err) {
          console.log(err);
      }
    };

    const handleDelete = async (_id) => {
      try {
          await axios.delete(`http://localhost:3005/api/${_id}`);
          window.location.reload();
      } catch (err) {
          console.log(err);
      }
    };

    const searchFilter = (array) => {
    return array.filter(
      (el) => el.companyName.includes(query)
    )
    }

    const filtered = searchFilter(accounts)

    return (
        <div>
          <Container fluid="md">
          <InputGroup style={{ width: '10%', margin: '0 auto'}}>
            <h2>Accounts</h2>
          </InputGroup> 
            <InputGroup className="mb-3" style={{ width: '34%', margin: '0 auto'}}>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Search company"
                  value={query}
                  onChange = {(e) => setQuery(e.target.value)}
                />
            </InputGroup>
            <Table style={{ width: '75%', margin: '0 auto'}} striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Company Name</th>
                  <th>Game Name</th>
                  <th>Payment Amount</th>
                  <th>Currency</th>
                  <th>Payment</th>
                  <th>Created</th>
                  <th>Payment Data</th>
                  <th>Click Paid</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filtered?.map((item)=> (
                <tr key={item.acc_id}
                >
                  <td>{item.acc_id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.gameName}</td>
                  <td>{item.paymentAmount}</td>
                  <td>{item.currency}</td>
                  <td>{item.payment}</td>
                  <td>{item.paymentData}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    {item.paymentAmount !== "" ?
                      <p>Paid</p>
                  : 
                      <Button variant="success" id="button-addon1" style={{width: '80px'}}
                      
                      onClick={()=> handlePaid(item._id)}
                      >
                        Pay
                      </Button>
                    }
                  </td>
                  <td>
                      <Button variant="danger" id="button-addon1" style={{width: '80px'}}
                      onClick={()=>handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>   
            <InputGroup className="mb-3" style={{ width: '20%', margin: '0 auto', top: '30px'}}>
            <Link href="/accounts">
                <Button variant="outline-dark" id="button-addon1" style={{ width: '150px'}}>
                  Create account
                </Button>
            </Link>
                
            </InputGroup>
            </Container>
        </div>
    )
}
export default Accounts;

