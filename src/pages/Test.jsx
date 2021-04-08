import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const TestParams = () => {
  const { id } = useParams();
  const history = useHistory();

  console.log(history);

  return (
    <>
      <h1>Params: {id} </h1>
      <hr />
      <button onClick={() => history.goBack()} className='btn btn-flat'>
        Go back
      </button>
    </>
  );
};

export default TestParams;
