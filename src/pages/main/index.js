import React, { Component } from 'react';
import api from "../../services/api";

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
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product.score}>{product.show.name}</h2>
                ))}

                {this.state.products.map(product => (
                    <h2 key={product.score}>{product.show.genres}</h2>
                ))}

                {/* {this.state.products.map(product => (
                    <img key={product.score}>{product.show.image.original}</img>
                ))} */}
            </div>
        );
    }
}
