import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import './App.css';
import Button from './components/Button';
import Card from './Card';
import { randomId, updateListElement } from './utils';
import { initialState } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: initialState,
    };
  }

  updateField = (id, e, field) => {
    const { value } = e.target;
    this.setState({
      elements: updateListElement(this.state.elements, id, field, value)
    });
  };

  updateInitiative = (id, e) => {
    clearTimeout(this.timeout_);
    this.updateField(id, e, 'initiative');
    this.timeout_ = setTimeout(() => this.sortElements(), 500);
  };

  sortElements = () => {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  };

  addCard = () => {
    const { elements } = this.state;
    elements[elements.length] = {
      id: randomId(),
      name: `Player ${elements.length + 1}`,
      initiative: -100,
      hitpoints: 12,
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  };

  removeElement = (id) => {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id);
    this.setState({ elements });
  };

  render() {
    const { elements } = this.state;
    return (
      <div>
        <div className="header">
          <Button
            onClick={this.addCard}
            label="Add New Card"
          />
        </div>
        <FlipMove
          duration={240}
          delay={0}
          staggerDurationBy={260}
          staggerDelayBy={0}
          easing="cubic-bezier(0.13, 1.15, 0.8, 1.5)"
        >
          {elements.map(element =>
            <Card
              key={element.id}
              element={element}
              onUpdateField={this.updateField}
              onInitiativeChange={this.updateInitiative}
              onRemove={this.removeElement}
            />
          )}
        </FlipMove>
      </div>
    );
  }
}

export default App;
