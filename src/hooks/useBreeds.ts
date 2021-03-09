import {BreedModel} from './../models/breed.model';
import {useState, useEffect} from 'react';
import {getAllBreeds} from '../api/breeds.api';

//TODO: Here we should use some library that can handle server state and
//use some cache solution. Exmaples of these are ReactQuery or SWR
//or if it is a GraphQL api Apllo Client

const useBreeds = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BreedModel>();
  const [error, setError] = useState();
  //Flag that allows refetch all breeds from api
  const [fetchBreeds, setFetchBreeds] = useState(true);

  const refetch = () => {
    setFetchBreeds(!fetchBreeds);
  };

  useEffect(() => {
    let ignore = false; //to avoid memoryLeak when component unmounted
    if (fetchBreeds) {
      const fetchBreeds = async () => {
        setLoading(true);
        try {
          const json = await getAllBreeds();
          if (!ignore) setData(json);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
        refetch();
      };
      fetchBreeds();
    }
    return () => {
      ignore = true;
    };
  }, [fetchBreeds]);

  return {data, loading, error, refetch};
};

export default useBreeds;
