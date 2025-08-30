import React from 'react'
import { Form } from 'react-bootstrap'

const BookSearch = ({ search, onSearch }) => {
    const handleBookSearch = (event) => {
        onSearch(event.target.value)
    };

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Buscador de libros</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa título"
                    onChange={handleBookSearch}
                    value={search}
                />
            </Form.Group>
        </div>
    )
}

<<<<<<< HEAD
export default BookSearch
=======
export default BookSearch
>>>>>>> 42c33191e4cb1016fb45827db96b0ed3fd3c4577
