import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
      products: []  
    };

    componentDidMount() {
      this.loadProducts();
    }

    loadProducts = async () => {
      const response = await api.get(`/search/shows?q=girls`);

      this.setState({ products: response.data });
    };

    render() {
      const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <div key={product.show.id}>

            <div className="product-card">
              <img src={product.show.image.medium} alt="Poster" />

              <div className="product-info">
                <strong>{product.show.name}</strong>
                <p>Gênero: {product.show.genres}</p>
                <Link to={`products/${product.show.id}`}>Saiba mais</Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  }
}
