import './App.css'
import Books from './components/books/Books';

const App = () => {
  const books = [
    {
      title: '100 años de soledad',
      author: 'Gabriel García Márquez',
      rating: 4.9,
      pageCount: 417,
      imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
      available: true
    },
    {
      title: '1984',
      author: 'George Orwell',
      rating: 4.8,
      pageCount: 328,
      imageUrl: "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
      available: false
    },
    {
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      rating: 4.7,
      pageCount: 96,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG',
      available: true
    },
    {
      title: '50 sombras de Grey',
      author: 'E.L James',
      rating: 4.6,
      pageCount: 863,
      imageUrl: "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
      available: true
    }
  ];

  return (
    <div>
      <h2 className="text-center mt-4">Book Champions App</h2>
      <p className="text-center">¡Quiero leer libros!</p>
      <Books books={books} />
    </div>
  );
};

export default App;

