export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
}
