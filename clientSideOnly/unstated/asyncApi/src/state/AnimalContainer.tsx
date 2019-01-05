import { Container } from 'unstated';

export interface Animal {
  id: number;
  name: string;
}

export interface AnimalState {
  animals: Animal[];
}
  
export default class AnimalContainer extends Container<AnimalState> {
  state: AnimalState = {
    animals: []
  }

  loadAnimals = async () => {
    const res = await fetch('/api/animals');
    if (res.status >= 400) {
      throw new Error(`Server error: ${res.status} ${res.statusText}`);
    }
    
    const animals = await res.json() as Animal[];
    this.setState({ ...this.state, animals });
  }
}
