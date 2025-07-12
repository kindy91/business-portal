class User {
  constructor({ id, name, email, phone, street, zipcode, role }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.street = street;
    this.zipcode = zipcode;
    this.role = role; // 'admin' | 'manager' | 'normal'
  }
}
module.exports = User;
