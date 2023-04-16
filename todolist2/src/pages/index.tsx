// export { default as Todo } from './Todo';

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Index;