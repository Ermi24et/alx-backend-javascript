import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([value, user]) => {
      console.log(`${value.body} ${user.firstname} ${user.lastname}`);
    })
    .catch(() => console.log('Signup system offline'));
}
