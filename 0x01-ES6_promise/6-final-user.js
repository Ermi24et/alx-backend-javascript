import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const newArray = [];
      for (const val of values) {
        if (val.status === 'fulfilled') newArray.push({ status: val.status, value: val.value });
        else newArray.push({ status: val.status, value: `${val.reason}` });
      }
      return newArray;
    });
}
