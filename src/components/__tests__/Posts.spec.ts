import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import Posts from '../Posts.vue'

describe.concurrent('Posts', () => {
  it('renders Posts', async () => {
    render(Posts)
    const title = 'quis ut nam facilis et officia qui'
    const button = await screen.findByText('Fetch Data')
    await fireEvent.click(button)
    const response = await screen.findByText(title)
    // assert
    expect(response.innerHTML).toBe(title)
  })
})
