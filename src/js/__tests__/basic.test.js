import {Team} from "../character.js"
describe('Team', () => {
  let team;
  let character1;
  let character2;

  beforeEach(() => {
    team = new Team();
    character1 = { name: 'Pikachu' };
    character2 = { name: 'Charizard' };
  });
  
  it('should add a character to the team if character is not already there', () => {
    team.add(character1);
    expect(team.members.size).toEqual(1);
  });
  
  it('should throw an error if trying to add a character already in the team', () => {
    team.add(character1);
    expect(() => {
      team.add(character1);
    }).toThrow('This character is already in the team');
  });

  it('should add all characters to the team if no one is already there', () => {
    team.addAll(character1, character2);
    expect(team.members.size).toEqual(2);
  });

  it('should only add unique characters to the team if some are already there', () => {
    team.add(character1);
    team.addAll(character1, character2);
    expect(team.members.size).toEqual(2);
  });

  it('should convert the team to an array', () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});