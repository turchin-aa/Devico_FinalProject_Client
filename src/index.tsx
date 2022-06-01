import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CustomTheme } from './theme/CustomTheme'
import { Provider } from 'react-redux'
import store from './store'
import Loader from './components/LazyLoad/Loader'

const LazyLoad = React.lazy((): Promise<{ default: ComponentType<any> }> => {
  return import('./App')
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CustomTheme>
      <Provider store={store}>
        <React.Suspense fallback={<Loader />}>
          <LazyLoad />
        </React.Suspense>
      </Provider>
    </CustomTheme>
  </React.StrictMode>,
)
