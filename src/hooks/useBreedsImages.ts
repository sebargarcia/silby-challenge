import {BreedModel} from '../models/breed.model';
import {useState, useEffect} from 'react';
import {getBreedsImages} from '../api/breeds.api';

const useBreedsImages = (search: string, breeds: string[] = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    //If array of breeds is empty not call API
    if (search === '' || breeds.length === 0) {
      setData([]);
      return;
    }
    let ignore = false; //to avoid memoryLeak when component unmounted
    const fetchBreeds = async () => {
      setLoading(true);
      try {
        const images = await getBreedsImages(breeds, 100);
        if (!ignore) setData(images);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchBreeds();
    return () => {
      ignore = true;
    };
  }, [breeds]);

  return {data, loading, error};
};

export default useBreedsImages;
