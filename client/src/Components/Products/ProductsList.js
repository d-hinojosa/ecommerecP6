// import React from 'react';
// import products from './products.json'

// const initState = {
//   products,
//   filterProducts: [],
//   filter: ''

// }

// class  ProductsList extends React.Component {
//   constructor(){
//     super();
//     this.state = initState
//   }
//  handleFilter =(e) => {
//   let value = e.target.value
//   const products = this.state.products.products.slice()
//   const showFilter = products.filter(product => {
//     return product.category.includes(value)
//   })
//   this.setState({filterProducts: showFilter})
//  }
//   render(){
//     /*
//       decide if filter is on show
//       filtler array if not on all products
//       have to go from filter and no filter
//     */
//      const mappedProducts = this.state.products.products.map((product, index) => {
//           return(  <div className="col-md-4">
//               <div className="card mb-4 box-shadow">
//                 <img id={index} src={product.image} alt={product.description}/>
//                    <div className="card-body">
//                 <p className="card-text font-weight-bold lead">{product.name}</p>
//                 <p className="card-text">{product.description}</p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className="btn-group">
//                       <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
//                       <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
//                     </div>
//                     <large className="text-muted font-weight-bold lead">${product.price}</large>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//      })
//     return(
//       // Products
//       <div>
//       <select onChange={this.handleFilter}>
//         <option value="Necklaces">Necklaces</option>
//         <option value="Rings">Rings</option>
//         <option value="Watches">Watches</option>
//       </select>

//         <div className="album py-5 bg-light">
//           <div className="container">
//             <div className="row">
//               {mappedProducts}
//             </div>
//           </div>
//         </div>
//         </div>
//   )
//   }

// }
// export default ProductsList;

import React from "react";

const ProductList = props => {
  return (
    <div className="col-md-4">
      {/* <div className="card mb-4 box-shadow">
        <img id={index} src={props.product_image} alt={product.description} />
        <div className="card-body">
          <p className="card-text font-weight-bold lead">{prop.product_name}</p>
          <p className="card-text">{prop.product_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Buy
              </button>
            </div>
            <large className="text-muted font-weight-bold lead">
              ${prop.product_price}
            </large>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductList;
