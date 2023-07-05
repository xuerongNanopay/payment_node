import {
  useRoutes
} from 'react-router-dom'

import routes from "./routes";

const App = _ => {
  const content = useRoutes(routes);

  return (
    <>
      {content}
    </>
  )
}

export default App