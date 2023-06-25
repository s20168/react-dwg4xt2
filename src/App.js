import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const submitInfo = (event) => {
    event.preventDefault();
    console.log(
      `Imię: ${firstName}, Nazwisko: ${lastName}, Adres e-mail: ${email}`
    );
  };

  return (
    <Form onSubmit={submitInfo}>
      <Form.Group controlId="firstName">
        <Form.Label>Imię: </Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Nazwisko: </Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Adres e-mail: </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Zarejestruj się
      </Button>
    </Form>
  );
}

export default App;
