import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import store from 'store2';
import mousetrap from 'mousetrap';
import './App.css';
import Button from './components/Button';
import Card from './Card';
import { randomId, updateListElement } from './utils';
import { initialState } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { elements: [], current: 0 };
  }

  componentDidMount() {
    const storeDate = store.get('dnd-data');
    if (storeDate) {
      this.setState(storeDate);
    } else {
      this.setState({ elements: initialState, current: 0 });
    }
    mousetrap.bind(['command+k', 'ctrl+k'], () => {
      console.log('called.');
      this.nextTurn()
    })
  };

  componentWillUnmount() {
    mousetrap.unbind('command+k');
    mousetrap.unbind('ctrl+k');
  };

  nextTurn = () => {
    const { elements, current } = this.state;
    const val = current === elements.length - 1 ? 0 : current + 1;
    this.setState({ current: val });
    this.syncStateWithLocalStore();
  };

  syncStateWithLocalStore = () => {
    store.set('dnd-data', this.state);
  };

  updateField = (id, e, field) => {
    const { value } = e.target;
    this.setState({
      elements: updateListElement(this.state.elements, id, field, value)
    });
    this.syncStateWithLocalStore();
  };

  updateInitiative = (id, e) => {
    clearTimeout(this.timeout_);
    this.updateField(id, e, 'initiative');
    this.timeout_ = setTimeout(() => this.sortElements(), 500);
    this.syncStateWithLocalStore();
  };

  sortElements = () => {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
    this.syncStateWithLocalStore();
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
    this.syncStateWithLocalStore();
  };

  removeElement = (id) => {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id);
    this.setState({ elements });
    this.syncStateWithLocalStore();
  };

  render() {
    const { elements, current } = this.state;
    return (
      <div>
        <div className="header">
          <Button
            onClick={this.addCard}
            label="Add New Card"
            bold
          />
        </div>
        <FlipMove
          duration={240}
          delay={0}
          staggerDurationBy={260}
          staggerDelayBy={0}
          easing="cubic-bezier(0.13, 1.15, 0.8, 1.5)"
        >
          {elements.map((element, index) =>
            <Card
              key={element.id}
              element={element}
              onUpdateField={this.updateField}
              onInitiativeChange={this.updateInitiative}
              onRemove={this.removeElement}
              isCurrent={index === current}
            />
          )}
        </FlipMove>
      </div>
    );
  }
}

export default App;
