import { isSameDay, isSameUser } from '../../../../App/Components/ChatScreen/src/utils'

it('should test if same day', () => {
  const now = new Date()
  expect(isSameDay({ createdAt: now }, { createdAt: now })).toBe(true)
})

it('should test if same user', () => {
  const message = { user: { _id: 1 } }
  expect(isSameUser(message, message)).toBe(true)
})
