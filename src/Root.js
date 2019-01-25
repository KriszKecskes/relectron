import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

/* Your components come here */
import Welcome from './components/Welcome/Welcome';

/* 
Here is the root of your application DOM TreeWalker. 
You need to insert your component here, because of the hot reload moulde! 
*/

const Root = _ => {
  return(
    <Fragment>
      <Welcome/>
    </Fragment>
  );
}

export default hot(Root);