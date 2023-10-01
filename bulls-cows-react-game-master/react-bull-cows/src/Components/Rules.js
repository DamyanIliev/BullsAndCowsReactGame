import React, { Component } from 'react';
import styled from 'styled-components';

const RulesWrapper = styled.div`
  padding: 1rem;
  max-width: 40%;
  margin: 0 auto;
  text-align: left;
  border-radius: 20px;
  border: 10px solid #f0f8fc;
  background-color: rgba(0,0,0,0.5);
  @media (max-width: 700px) {
    max-width: 90%;
  }
`
const RulesLink = styled.a`
  font-size: 14px;
  font-weight: normal;
  color: white;
  padding: 1em;
  display: block;
`
class Rules extends Component {
  constructor(){
    super();
    this.state = {
      scrollOpen: false,
    }
  }
  __handleRulesView(){
    this.setState(prevState => {
      return {
        scrollOpen: !prevState.scrollOpen,
      }
    })
  }
  render() {
    const { scrollOpen } = this.state;
    return (
      <div>
        <RulesLink href= "javascript:void(0)" onClick={this.__handleRulesView.bind(this)}>{ !scrollOpen ? `Как се играе?` : `Нова игра` }</RulesLink>
        {
          scrollOpen ?
          <RulesWrapper>
            <p>Целта на тази игра е да познаете 4-цифрено число в рамките на възможно най-малко опити.</p>
            <p>При всяко предположение ще получите обратна връзка, показваща колко бикове и крави сте получили с предположението.</p>
            <p>Bull означава: една от цифрите е правилна и е на правилното място.</p>
            <p>Cow означава: една от цифрите е правилно число, но не на правилното място.</p>
            <p>При първия опит трябва да има поне една намерена крава или бик!</p>
          </RulesWrapper>: ''
        }
      </div>
    );
  }
}

export default Rules;
