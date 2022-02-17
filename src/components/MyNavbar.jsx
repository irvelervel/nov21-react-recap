// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar' // this is more of a "specific" import
import Nav from 'react-bootstrap/Nav' // this is more of a "specific" import
import InputGroup from 'react-bootstrap/InputGroup' // this is more of a "specific" import
import FormControl from 'react-bootstrap/FormControl' // this is more of a "specific" import
// this is more of a "specific" import
// importing your components in this way helps the "treeshaking" process
import { Link, useNavigate } from 'react-router-dom'

const MyNavbar = ({ filter, setFilter }) => {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      {/* 1st navigation technique */}
      <Link to='/'>
        <Navbar.Brand>Strive Calendar</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Filter appointments here :)'
            aria-label='filter'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </InputGroup>
        <Nav className='ml-auto'>
          <div
            className='nav-link'
            onClick={() => {
              // 2nd navigation technique
              navigate('/profile')
            }}
            style={{ cursor: 'pointer' }}
          >
            Profile
          </div>
          <div className='nav-link'>????</div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
