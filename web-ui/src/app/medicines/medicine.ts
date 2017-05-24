export class Medicine {
  id: number;
  name: string;
  price: number;
  size: string;
  replacements: Medicine[];
  isPrescriptionRequired: boolean;
  ingredients: string;
  usage: string;
  contraindications: string;

  constructor(
    name: string,
    price: number,
    size: string,
    isPrescriptionRequired: boolean,
    ingredients: string,
    usage: string,
    contraindications: string
  ){
    this.name = name;
    this.price = price;
    this.size = size;
    this.isPrescriptionRequired = isPrescriptionRequired;
    this.ingredients = ingredients;
    this.usage = usage;
    this.contraindications = contraindications;
  }
}
