import {
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
  Toast,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({ filter }) => {
  const [data, setData] = useState([])
  //   const [filter, setFilter] = useState('') // this is for local filtering
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/agenda/'
      )
      if (response.ok) {
        let appointments = await response.json()
        console.log('appointments', appointments)
        setTimeout(() => {
          setIsLoading(false)
          setData(appointments)
        }, 500)
      } else {
        setIsError(true)
        setIsLoading(false)
        setTimeout(() => {
          setIsError(false)
        }, 2000)
      }
    } catch (error) {
      console.log(error)
      setIsError(true)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>AGENDA APPLICATION</h2>
            {/* <InputGroup className='mb-3'>  // this is for local filtering
              <FormControl
                placeholder='Filter appointments here!'
                aria-label='Filter'
                aria-describedby='Filter'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </InputGroup> */}
            {isLoading && <Spinner variant='warning' animation='border' />}
            <ListGroup>
              {data
                // SUPER COMPRESSED VERSION // this is for local filtering
                // .filter(
                //   ({ name, description }) =>
                //     name.toLowerCase().includes(filter.toLowerCase()) ||
                //     description.toLowerCase().includes(filter.toLowerCase())
                // )
                // A LITTLE MORE STEP-TO-STEP VERSION // this is for local filtering
                .filter((appointment) => {
                  let isFilterInAppointment =
                    appointment.name
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    appointment.description
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                  // isFilterInAppointment is going to be true or false
                  return isFilterInAppointment
                })
                .map((appointment) => (
                  <Link
                    key={appointment._id}
                    to={'/details/' + appointment._id}
                  >
                    <ListGroup.Item>
                      {appointment.name} - {appointment.description}
                    </ListGroup.Item>
                  </Link>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Toast
        show={isError}
        onClose={() => {
          setIsError(false)
        }}
      >
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </>
  )
}

export default HomePage
