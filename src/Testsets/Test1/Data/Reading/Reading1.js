import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function Listening1() {
    return (
        <div>
            <Container>
                o. welcome to the Listening 1 .<br/>
                <Link to="/test1_read1_sect1" ><Button varient="transparent" > Section 1 </Button> </Link>
                <Link to="/test1_read1_sect2" ><Button varient="primary" > Section 2 </Button> </Link>
                <Link to="/test1_read1_sect3" ><Button varient="primary" > Section 3 </Button> </Link>
                <Link to="/test1_read1_sect4" ><Button varient="primary" > Section 4 </Button> </Link>

            </Container>
        </div>
    )
}

export default Listening1