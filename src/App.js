import './App.css';
import { mockProductsResponse } from './mockData'

function App() {
  const { products } = mockProductsResponse
  return (
    <>
      <h1>Hearst E-Commerce</h1>
      <div className='main-container'>
        <div className='grid-container'>
        {products.map((product) => (
            <div key={product.product_id} className='grid-item'>
              <div>{product.title}</div>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
