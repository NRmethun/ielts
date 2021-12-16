import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function Listening1() {
    return (
        <div>
            <Container>
                o. welcome to the Listening 1 .<br/> 
                <Link to="/test1_list1_sect1" ><Button  > Section 1 </Button> </Link>
                <Link to="/test1_list1_sect2" ><Button > Section 2 </Button> </Link>
                <Link to="/test1_list1_sect3" ><Button > Section 3 </Button> </Link>
                <Link to="/test1_list1_sect4" ><Button > Section 4 </Button> </Link>

            </Container>
        </div>
    )
}

export default Listening1
