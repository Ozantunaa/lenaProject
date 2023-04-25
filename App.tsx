import DataContextProvider from './src/context/DataContextProvider'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <DataContextProvider>
      <AppNavigator/>
    </DataContextProvider>
  )
}

export default App