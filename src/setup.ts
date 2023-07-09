import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { postsResponse } from './mocks/MockPosts'
import 'whatwg-fetch'

export const restHandlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postsResponse))
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
