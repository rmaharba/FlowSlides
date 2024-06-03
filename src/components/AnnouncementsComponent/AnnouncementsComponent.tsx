import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';

import {useGetAnnouncementsData} from '../../hooks';

import {stylesAnnouncements} from './styles';

export const AnnouncementsComponent = () => {
  const {announcementsData} = useGetAnnouncementsData();

  return (
    <>
      {announcementsData.map(item => (
        <View
          key={item.backgroundColor}
          style={[
            {
              backgroundColor: item.backgroundColor,
            },
            stylesAnnouncements.container,
          ]}>
          <Text style={stylesAnnouncements.messageContainer}>
            {item.message}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.ctaUrl);
            }}>
            <Text style={stylesAnnouncements.textLink}>{item.ctaLabel}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};
