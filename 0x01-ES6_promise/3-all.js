import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([pic, name]) => {
      console.log(`${pic.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
