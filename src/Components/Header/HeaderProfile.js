import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/Feather';
import IconEnt from 'react-native-vector-icons/Entypo';
import ImageLoader from '../ImageLoader/ImageLoader';
import Pic1 from '../../assets/images/pic1.jpg';
import SocialModal from '../Modal/SocialModal';

const HeaderProfile = ({onBack, image}) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <>
      <View style={styles.headerTopContainer}>
        <TouchableOpacity onPress={onBack}>
          <Icon name="chevron-left" size={Metrics.icons.normal} color={Colors.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerFooterContainer} onPress={openModal}>
          <IconEnt name="info-with-circle" size={Metrics.icons.normal} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <ImageLoader source={Pic1} resizeMode="cover" />
      </View>
      <SocialModal ref={modalRef} />
    </>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  headerTopContainer: {
    height: Metrics.verticalScale(130),
    justifyContent: 'space-between',
    backgroundColor: Colors.APP_PRIMARY,
    padding: Metrics.baseMargin,
  },
  headerFooterContainer: {
    alignSelf: 'flex-end',
  },
  imageContainer: {
    width: Metrics.scale(90),
    height: Metrics.scale(90),
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: Colors.WHITE,
    borderWidth: 3,
    marginTop: Metrics.scale(-45),
    margin: Metrics.baseMargin,
  },
});
