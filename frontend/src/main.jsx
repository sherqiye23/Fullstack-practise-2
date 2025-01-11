import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/slice.js'
import FavoritesProvider from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavoritesProvider FavoritesProvider>
    <Provider store={store}>
      <App />
    </Provider>,
  </FavoritesProvider>
)
