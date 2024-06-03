import {SLIDER_API_TOKEN} from '@env';
import {useCallback, useEffect, useState} from 'react';

import {SlidesArray} from '../utils/types';
import {fetchGraphQL} from '../services/fetch';
import {sliderDataMapper, urlsData} from '../utils';
import {HERO_SLIDER_QUERY} from '../services/queries';

export const useGetSliderData = () => {
  const [sliderData, setSliderData] = useState<SlidesArray>([]);

  const fetchData = useCallback(async () => {
    const sliderResponse = await fetchGraphQL({
      query: HERO_SLIDER_QUERY,
      token: SLIDER_API_TOKEN,
      uri: urlsData?.sliderUrl,
    });

    const mapData = sliderDataMapper(sliderResponse.blockHomeHeroSlider);

    setSliderData(mapData);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {sliderData};
};
