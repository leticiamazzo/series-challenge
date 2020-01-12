import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
      series: []  
    };

    componentDidMount() {
      this.loadSeries();
    }

    loadSeries = async () => {
      const response = await api.get(`/search/shows?q=girls`);

      this.setState({ series: response.data });
    };

    render() {
      const { series } = this.state;

    return (
      <div className="serie-list">
        {series.map(serie => (
          <div key={serie.show.id}>

            <div className="serie-card">
              <img src={serie.show.image.medium} alt="Poster" />

              <div className="serie-info">
                <strong>{serie.show.name}</strong>
                <p>Gênero: {serie.show.genres[0]}  {serie.show.genres[1]}  {serie.show.genres[2]}</p>
                <Link to={`series/${serie.show.id}`}>Saiba mais</Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  }
}
