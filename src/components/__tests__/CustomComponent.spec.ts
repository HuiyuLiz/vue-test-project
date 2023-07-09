import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import CustomComponent from '../CustomComponent.vue'

describe.concurrent('CustomComponent', () => {
  const viewText = 'Hello World'

  it('renders div correctly', async () => {
    render(CustomComponent, {
      props: { element: 'div', ariaLabel: 'test', isDisabled: false },
      slots: { default: viewText }
    })

    const view = await screen.findByText(viewText)

    // assert
    expect(view.innerHTML).toBe(viewText)
    expect(view.nodeName).toBe('DIV')
  })

  it.only('snap shot matches', () => {
    const component = render(CustomComponent, {
      props: { element: 'span', ariaLabel: 'test', isDisabled: false }
    })

    expect(component).toMatchSnapshot()
  })
})
