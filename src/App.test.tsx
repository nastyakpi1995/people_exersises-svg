// export function getUserName(userID) {
//   return request('/users/' + userID).then(user => user.name);
// }
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

// import React from 'react';
//
// const promise = new Promise((resolve, reject) => {
//   // через 1 секунду готов результат: result
//   resolve('result');
//
//   // через 2 секунды — reject с ошибкой, он будет проигнорирован
//   reject(new Error('ignored'));
// });
//
//  describe('Fetching', () => {

it('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(users).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
// it('works with resolves', () => {
//   expect.assertions(1);
//   return expect(promise).resolves.toEqual('result');
// });
//
//   it('works with resolves', () => {
//     expect.assertions(1);
//     return expect(promise).rejects.toEqual({
//       error: 'User with 3 not found.',
//     });
//   });

// it('tests error with promises', () => {
//   expect.assertions(1);
//   return promise.catch((e) =>
//     expect(e).toEqual({
//       error: 'User with 2 not found.',
//     })
//   );
// });
// it('works with promises', () => {
//   expect.assertions(1);
//   return user.getUserName(4).then(data => expect(data).toEqual(‘Mark’));
// });
// });
