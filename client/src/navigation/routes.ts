export enum Routes {
  Home = 'Home',
  CreateProduct = 'CreateProduct',
  ProductDetail = 'ProductDetail',
}
export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.CreateProduct]: undefined;
  [Routes.ProductDetail]: {id: string};
};
