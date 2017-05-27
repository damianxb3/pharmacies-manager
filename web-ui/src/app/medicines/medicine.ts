export class Medicine {
  id: number;
  name: string;
  price: number;
  size: string;
  replacements: Medicine[];
  prescriptionRequired: boolean;
  ingredients: string;
  usage: string;
  contraindications: string;

  constructor(
    name?: string,
    price?: number,
    size?: string,
    prescriptionRequired?: boolean,
    ingredients?: string,
    usage?: string,
    contraindications?: string
  ){
    this.name = name || '';
    this.price = price || 0;
    this.size = size || '';
    this.prescriptionRequired = prescriptionRequired || true;
    this.ingredients = ingredients || '';
    this.usage = usage || '';
    this.contraindications = contraindications || '';
  }

}
