const User = require('../models/user');
let users = [
  new User({
    id: '1',
    name: 'Alice Smith',
    email: 'alice@example.com',
    phone: '123-456-7890',
    street: '123 Main St',
    zipcode: '10001',
    role: 'admin'
  }),
  new User({
    id: '2',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '987-654-3210',
    street: '456 Elm St',
    zipcode: '10002',
    role: 'manager'
  }),
  new User({
    id: '3',
    name: 'Carol Lee',
    email: 'carol@example.com',
    phone: '555-123-4567',
    street: '789 Oak St',
    zipcode: '10003',
    role: 'normal'
  }),
  new User({
    id: '4',
    name: 'David Kim',
    email: 'david@example.com',
    phone: '222-333-4444',
    street: '321 Maple Ave',
    zipcode: '10004',
    role: 'manager'
  }),
  new User({
    id: '5',
    name: 'Eva Brown',
    email: 'eva@example.com',
    phone: '333-444-5555',
    street: '654 Pine St',
    zipcode: '10005',
    role: 'normal'
  })
]; // In-memory store

module.exports = {
  getAll: () => users,
  getById: (id) => users.find(u => u.id === id),
  create: (data) => {
    const user = new User({ id: Date.now().toString(), ...data });
    users.push(user);
    return user;
  },
  update: (id, data) => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...data };
    return users[idx];
  },
  delete: (id) => {
    users = users.filter(u => u.id !== id);
  },
  deleteAll: () => { users = []; }
};
