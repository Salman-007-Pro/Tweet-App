import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/Fontisto';

const SocialModal = forwardRef(({}, ref) => {
  const [visible, setVisible] = useState(true);

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
          <Text style={styles.bodyText}>
            Mark Samson is a Human Resources specialist with a decade of successful experience in
            hiring and employee management.{'\n'}
          </Text>
          <Text style={styles.bodyText}>
            Mark specializes in Human Resource technologies and regularly attends national training
            sessions to showcase new HR tech trends, such as self-service, wellness apps, and people
            analytics tools.{'\n'}
          </Text>
          <Text style={styles.bodyText}>
            A strong believer in the power of positive thinking in the workplace,
          </Text>
        </View>

        <View style={styles.footerWrapper}>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerIconStyle}>
              <IconFont name="world-o" size={Metrics.icons.small} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIconStyle}>
              <Icon name="twitter" size={Metrics.icons.small} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="instagram" size={Metrics.icons.small} />
            </TouchableOpacity>
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
