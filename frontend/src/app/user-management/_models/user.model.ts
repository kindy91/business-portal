export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  zipcode: string;
  role: 'admin' | 'manager' | 'normal';
}
