export enum Routes {
  Home = 'Home',
  CreateProduct = 'CreateProduct',
  ProductDetail = 'ProductDetail',
  UpdateProduct = 'UpdateProduct',
}
export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.CreateProduct]: undefined;
  [Routes.ProductDetail]: {id: string};
  [Routes.UpdateProduct]: {id: string};
};
