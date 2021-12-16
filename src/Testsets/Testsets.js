import React from 'react'
import {Card, Container} from 'react-bootstrap' 
import {Link}  from 'react-router-dom'


function Testsets() {
    return (
        <div> 

            <Container fluid="md" >

          <row>   

          
              <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Test 1</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Cambridge Ielts 9</Card.Subtitle>
    <Card.Text>
        All the element here is downloaded from internet .
         None is my property except the wesite 
    </Card.Text>

    <Card.Link href="/test1">Go to Test 1 </Card.Link>
    
    </Card.Body>
   </Card>  

<br/>
   
  
   <Card style={{ width: '18rem' ,background:'light'}}>
  <Card.Body>
    <Card.Title>Test 2</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Cambridge Ielts 9</Card.Subtitle>
    <Card.Text>
    All the element here is downloaded from internet .
         None is my property except the wesite
    </Card.Text>

    <Card.Link href="/test2">go to test2</Card.Link>
    
    </Card.Body>
   </Card> 
   
   </row>
   </Container>
        </div>
    )
}

export default Testsets
