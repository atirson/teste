import React, { Component } from 'react';

import Container from '../../components/Container';
import Button from '../../components/Button';
import { Cheap, CartList, List, ProductImage, Info, Total, Frete } from './styles';

export default class LargerCart extends Component {
    state = {
      cheap: [],
      loading: false,
      total: [],
    };

  componentDidMount() {
    fetch('http://localhost:3334/items')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: true,
          cheap: json,
        });
      });
      fetch('http://localhost:3334/totalizers')
      .then(res => res.json())
      .then(json => {
        this.setState({
          total: json,
        });
      });
  }

  render() {
    const { loading, cheap, total } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <Cheap>
          <h1>Meu Carrinho</h1>
          <CartList>
            {cheap.map(cheaps => (
              <List>
                <ProductImage>
                  <img src={cheaps.imageUrl} alt={cheaps.name}/>
                </ProductImage>
                <Info>
                  <h3>{cheaps.name}</h3>
                  <p>R$ {cheaps.price/100}</p>
                  <strong>R$ {cheaps.price/100}</strong>
                </Info>
              </List>
            ))}
            <Total>
              {total.map(value => (
                <>
                <p>Total:</p>
                <strong>R$ {value.valueAll/100}</strong>
                </>
              ))}
            </Total>

            <Frete>
              <h2>Parabéns, sua compra tem frete é Grátis</h2>
            </Frete>
            <Button>
              Finalizar Compra
            </Button>
          </CartList>
        </Cheap>
      </Container>
    );
  }
}
