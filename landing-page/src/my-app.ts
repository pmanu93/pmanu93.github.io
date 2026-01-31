import * as repos from './repos.json';

export class MyApp {
  public repositories: any[];

  constructor() {
    this.repositories = repos;
  }
}
