const BookItem = () => {
    const bookTitle = "100 años de soledad";
    const bookAuthor = "Gabriel García Marquez";
    const bookRating = 5;
    const bookPages = 410
    return (

        <div>
            <h2>{bookTitle}</h2>
            <h3>{bookAuthor}</h3>
            <div>{bookRating} estrellas</div>
            <p>{bookPages} páginas</p>
        </div>
    )
}

export default BookItem