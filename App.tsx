import DataContextProvider from './src/context/DataContextProvider'
import MainScreen from './src/screens/MainScreen'

const App = () => {
  return (
    <DataContextProvider>
      <MainScreen />
    </DataContextProvider>
  )
}

export default App