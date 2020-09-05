import React from 'react'
import { render, fireEvent } from '../testUtils'
import App from '../../src/pages/index'

describe('Home page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<App />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    it('clicking button triggers alert', () => {
        const { getByText } = render(<App />, {})
        window.alert = jest.fn()
        fireEvent.click(getByText('Test Button'))
        expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
    })
})
