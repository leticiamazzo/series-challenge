import React, { Component } from 'react';
import api from "../../services/api";
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

        console.log(response.data);

        this.setState({ products: response.data });
    };

    render() {
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product.score}>
                        <strong>{product.show.name}</strong>
                        <p>{product.show.genres}</p>

                        <img src="{product.show.image.original}" alt="Poster do filme"></img>

                        <a href="">Saiba mais</a>
                    </article>
                ))}

                {/* {this.state.products.map(product => (
                    <img key={product.score}>{product.show.image.original}</img>
                ))} */}
            </div>
        );
    }
}
