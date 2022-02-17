import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

const AppointmentDetail = () => {
  // here we'd like to retrieve the :appointmentId from the URL
  // and use it for performing a single object fetch
  const params = useParams()
  console.log(params.appointmentId)
  // why do we need this? to fetch its details!

  // 'https://striveschool-api.herokuapp.com/api/agenda/:appointmentId'

  const [details, setDetails] = useState(null)
  // an empty object is a TRUTHY VALUE, so your ternaries and && will work poorly
  // Stefano's raccomendations :) --> are you grabbing an array from the API? default the state variable with [], so
  // you'll always be able to MAP it!
  // are you instead taking an object out af an API? default it with null, so you can show different things
  // checking its truthiness!

  useEffect(() => {
    fetchAppointmentDetails()
  }, [])

  const fetchAppointmentDetails = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/agenda/' +
          params.appointmentId
      )
      if (response.ok) {
        let details = await response.json()
        console.log('DETAILS', details)
        setDetails(details)
      } else {
        console.log('we have an error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {details ? (
            <>
              <h2>{details.name}</h2>
              <p>{details.description}</p>
            </>
          ) : (
            <Spinner animation='border' variant='danger' />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default AppointmentDetail
