import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Product extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/shows/${id}`);
      
    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="list">
        <div className="info">
          <img src={product.image} alt="Poster" />

          <div className="details">
            <strong>{product.name}</strong>
            <p>Gênero: {product.genres}</p>
            <p>Data de lançamento: {product.premiered}</p>
          </div>
        </div>

        <span>Sinopse:</span>
        <p>{product.summary}</p>
        <Link to={'/'}>Voltar</Link>
      </div>
    );
  }
}
