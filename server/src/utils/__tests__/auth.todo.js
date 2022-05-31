import {username} from 'til-shared/generate'
import {isPasswordAllowed, userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('ffffffffff')).toBe(false)
  expect(isPasswordAllowed('8888888888')).toBe(false)
  expect(isPasswordAllowed('asda21.7654asf')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }

  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
