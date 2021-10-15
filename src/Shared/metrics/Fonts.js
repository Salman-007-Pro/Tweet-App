import Metrics from './Metrics';
import {Colors} from '../theme';

export default class Fonts {
  static FontFamily = {
    default: 'Roboto',
  };

  static Type = {
    Bold: 'Bold',
    Light: 'Light',
    Regular: 'Regular',
  };

  static font({
    fontFamily = Fonts.FontFamily.default,
    type = Fonts.Type.Regular,
    color = Colors.APP_PRIMARY,
    size = Metrics.verticalScale(18),
  }) {
    return {
      color,
      fontFamily: `${fontFamily}-${type}`,
      fontSize: Metrics.verticalScale(size),
    };
  }
}
