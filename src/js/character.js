export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character is already in the team');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (this.members.has(character)) {
        throw new Error('This character is already in the team');
      } else {
        this.members.add(character);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}