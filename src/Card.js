import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';
import { rollD20 } from './utils';
import { ElementType } from './constants';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 480px;
  box-shadow: #eee 1px 1px 1px;
  display: flex;
  flex-direction: row;
  margin: 12px auto;
  padding: 12px 6px;
  
  ${props => props.highlight && `
    border: 1px solid crimson;
    box-shadow: crimson 1px 1px 1px;
  `}
  
  input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 14px;
  }

  label {
    flex: 4;
    font-size: 10px;
    padding: 0 12px;
  }

  label.wide-input {
    flex: 14;
  }
`;

class Card extends Component {
  render() {
    const { element, onUpdateField, onInitiativeChange, onRemove, isCurrent } = this.props;
    return (
      <Wrapper highlight={isCurrent}>
        <Input
          label="Name"
          type="text"
          value={element.name}
          onChange={e => onUpdateField(element.id, e, 'name')}
          className="wide-input"
        />

        <Input
          label="Initiative"
          type="number"
          value={element.initiative}
          onChange={e => onInitiativeChange(element.id, e)}
        />

        <Button
          onClick={() => onInitiativeChange(element.id, { target: { value: rollD20() } } )}
          label="d20"
        />

        <Input
          label="Hitpoints"
          type="number"
          value={element.hitpoints}
          onChange={e => onUpdateField(element.id, e, 'hitpoints')}
        />

        <Button
          onClick={() => onRemove(element.id)}
          label="X"
        />
      </Wrapper>
    );
  }
}

Card.propTypes = {
  element: ElementType,
  onUpdateField: PropTypes.func,
  onInitiativeChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Card;
