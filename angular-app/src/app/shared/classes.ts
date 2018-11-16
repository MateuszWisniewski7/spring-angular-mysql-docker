export class Father {
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  birthDate: string;
  family: Family;
}

export class Child {
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  birthDate: string;
  sex: string;
  family: Family;
}

export class Family{
  id: number;
}
