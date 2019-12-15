import Product from './product';
import Transaction from './transaction';

export default interface Account {
  id?: string;
  name: string;
  email: string;
  currency: number;
  products: Array<Product>,
  transactions: Array<Transaction>,
}
