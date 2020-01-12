import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Serie extends Component {
  state = {
    serie: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/shows/${id}`);
      
    this.setState({ serie: response.data });
  }

  render() {
    const { serie } = this.state;

    return (
      <div className="list">
        <div className="info">
          <img src={serie.image} alt="Poster" />

          <div className="details">
            <strong>{serie.name}</strong>
            <p>Gênero: {serie.genres}</p>
            <p>Data de lançamento: {serie.premiered}</p>
          </div>
        </div>

        <span>Sinopse:</span>
        <p>{serie.summary}</p>
        <Link to={'/'}>Voltar</Link>
      </div>
    );
  }
}
