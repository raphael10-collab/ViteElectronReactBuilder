import * as React from 'react'

export default function App() {

  React.useEffect(() => {


    return () => { // clean-up function
    }
  }, [])

  return (
    <div className='container'>
      <h1 className='heading'>
          Welcome to Vite-Electron-React App
      </h1>


    </div>
  );

}
