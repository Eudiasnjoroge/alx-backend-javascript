const uploadPhoto = () => Promise.resolve({
  status: 200,
  body: 'photo-profile-1',
});

const createUser = () => Promise.resolve({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

export { uploadPhoto, createUser };
