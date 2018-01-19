import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';

describe('Main Content Component Tests', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Tests for Initialization', () => {
    it('Check if <main-content> component is created', () => {
      expect(component).toBeTruthy();
    });
    it('Bond counter should be Zero and type number', () => {
      expect(typeof(component.userCounter)).toBe('number');
      expect(component.userCounter).toEqual(0);
    });
    it('Holmes counter should be Zero and type number', () => {
      expect(typeof(component.computerCounter)).toBe('number');
      expect(component.computerCounter).toEqual(0);
    });
    it('Winner message should be empty and type string', () => {
      expect(typeof(component.winnerMessage)).toBe('string');
      expect(component.winnerMessage).toEqual('');
    });
    it('Check Bond selection and type object', () => {
      expect(typeof(component.userChoice)).toBe('object');
      expect(component.userChoice.id).toEqual(3);
    });
    it('Check Holmes selection and type object', () => {
      expect(typeof(component.computerChoice)).toBe('object');
      expect(component.computerChoice.id).toEqual(4);
    });
    it('Default options check and type object', () => {
      expect(typeof(component.defaultOptions)).toBe('object');
      expect(component.defaultOptions.length).toEqual(3);
    });
  });
  describe('User selection should be displayed as large image', () => {
    it('Check when Bond Selects Rock', () => {
      let temp = {id: 0, name: 'rock', url: '../../assets/rock.png'};
      component.onSelectOption(temp);
      expect(component.userChoice.id).toEqual(0);
    });
    it('Check when Bond Selects Paper', () => {
      let temp = {id: 1, name: 'paper', url: '../../assets/paper.png'};
      component.onSelectOption(temp);
      expect(component.userChoice.id).toEqual(1);
    });
    it('Check when Bond Selects Scissors', () => {
      let temp = {id: 2, name: 'scissors', url: '../../assets/scissors.png'};
      component.onSelectOption(temp);
      expect(component.userChoice.id).toEqual(2);
    });
  });
  describe('Check For Sherlock Holmes Selection', () => {
    beforeEach(() => {
      component.getComputerSelection();
    });
    it('Random value should be greater than or equlal to 0', () => {
      expect(component.computerChoice.id).toBeGreaterThanOrEqual(0);
    });
    it('Random value should be less than or equlal to 2', () => {
      expect(component.computerChoice.id).toBeLessThanOrEqual(2);
    });
  });
  describe('Check when both select same option', () => {
    it('Check when Bond selects ROCK and Holmes selects ROCK', () => {
      let message = component.findWinner('rock', 'rock');
      expect(message).toBe('TIE');
    });
    it('Check when Bond selects PAPER and Holmes selects PAPER', () => {
      let message = component.findWinner('paper', 'paper');
      expect(message).toBe('TIE');
    });
    it('Check when Bond selects SCISSORS and Holmes selects SCISSORS', () => {
      let message = component.findWinner('scissors', 'scissors');
      expect(message).toBe('TIE');
    });
  });
  describe('Check possible winner cases', () => {
    it('Check when ROCK selection is winner', () => {
      let message = component.findWinner('rock', 'scissors');
      expect(message).toBe('James Bond won');
    });
    it('Check when PAPER selection is winner', () => {
      let message = component.findWinner('paper', 'rock');
      expect(message).toBe('James Bond won');
    });
    it('Check when SCISSORS selection is winner', () => {
      let message = component.findWinner('scissors', 'paper');
      expect(message).toBe('James Bond won');
    });
  });
  describe('Check when user restarts the game', () => {
    beforeEach(() => {
      component.restartGame();
    });
    it('Bond score should be 0', () => {
      expect(component.userCounter).toBe(0);
    });
    it('Sherlock score should be 0', () => {
      expect(component.computerCounter).toBe(0);
    });
    it('Should reset the Bond selection', () => {
      expect(component.userChoice.id).toBe(3);
    });
    it('Should reset the Holmes selection', () => {
      expect(component.computerChoice.id).toBe(4);
    });
    it('Should reset the winner message', () => {
      expect(component.winnerMessage).toBe('');
    });
  });
});
