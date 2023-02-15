import './App.css';
import { mockProductsResponse, mockCombinedData, mockContentResponse } from './mockData'
import { extractRowsAndCells } from './util'

function App() {
  const components = mockCombinedData
  console.log(extractRowsAndCells(mockContentResponse.data))
  return (
    <>
      <h1>Hearst E-Commerce</h1>
      <div className='main-container'>
        <div className='grid-container'>
        {components.map((component) => {
            if (component.isContent) {
              return (
                <div key={component.position} className={`grid-item ${component.positionType}`}>
                  <div>{component.contents}</div>
                </div>
              )
            }
            return (
              <div key={component.product_id} className='grid-item'>
                <div>{component.title}</div>
                <img src={component.image} alt={component.name} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
