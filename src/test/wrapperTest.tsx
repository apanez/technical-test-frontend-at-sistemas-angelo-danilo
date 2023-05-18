import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

const Wrapper = ({children}: {children: any}) => <Provider store={store}>{children}</Provider>

const renderWithWrapper = (component: any) => render(component, { wrapper: Wrapper });

export default renderWithWrapper;
