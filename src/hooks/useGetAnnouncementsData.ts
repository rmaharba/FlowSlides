import {ANNOUNCEMENT_API_TOKEN} from '@env';
import {useCallback, useEffect, useState} from 'react';

import {urlsData} from '../utils';
import {fetchGraphQL} from '../services/fetch';
import {ANNOUNCEMENTS_QUERY} from '../services/queries';
import {AnnouncementItem} from '../components/AnnouncementsComponent/types';

export const useGetAnnouncementsData = () => {
  const [announcementsData, setAnnouncementsData] = useState<
    AnnouncementItem[]
  >([]);

  const fetchData = useCallback(async () => {
    const announcementsResponse = await fetchGraphQL({
      query: ANNOUNCEMENTS_QUERY,
      token: ANNOUNCEMENT_API_TOKEN,
      uri: urlsData?.announcementsUrl,
    });

    setAnnouncementsData(announcementsResponse.announcementCollection.items);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {announcementsData};
};
