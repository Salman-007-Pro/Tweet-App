import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/Fontisto';
import OpenURLButton from '../OpenUrlButton/OpenUrlButton';

const SocialModal = forwardRef(({story, socialLink}, ref) => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  const openModal = () => {
    setVisible(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      openModal: openModal,
      closeModal: closeModal,
    }),
    [],
  );

  return (
    <Modal
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visible}
      backdropOpacity={0.6}
      style={styles.modalWrapper}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.modalTopCloseContainer} onPress={closeModal}>
          <Icon name="close" size={Metrics.icons.small} />
        </TouchableOpacity>

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{story}</Text>
        </View>

        <View style={styles.footerWrapper}>
          <View style={styles.footerContainer}>
            <OpenURLButton style={styles.footerIconStyle} url={socialLink.website}>
              <IconFont name="world-o" size={Metrics.icons.small} />
            </OpenURLButton>
            <OpenURLButton style={styles.footerIconStyle} url={socialLink.twitter}>
              <Icon name="twitter" size={Metrics.icons.small} />
            </OpenURLButton>
            <OpenURLButton url={socialLink.instagram}>
              <Icon name="instagram" size={Metrics.icons.small} />
            </OpenURLButton>
          </View>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalWrapper: {
    margin: 0,
    padding: Metrics.baseMargin,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '80%',
    borderRadius: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
    overflow: 'hidden',
  },
  modalTopCloseContainer: {
    alignSelf: 'flex-end',
    padding: Metrics.baseMargin,
  },
  bodyContainer: {
    padding: Metrics.baseMargin,
    paddingTop: 0,
  },
  bodyText: {
    ...Fonts.font({size: 18, color: Colors.BLACK}),
  },
  footerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.baseMargin,
  },
  footerIconStyle: {
    marginRight: Metrics.verticalScale(50),
  },
});

export default SocialModal;
