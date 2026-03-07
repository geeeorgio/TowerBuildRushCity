import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: hp(16),
  },
  questionContainer: {
    width: '100%',
    height: hp(130),
    flexDirection: 'row',
    gap: wp(4),
  },
  questionImageContainer: {
    flex: 0.3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionImage: {
    width: '100%',
    height: '100%',
  },
  questionTextContainer: {
    flex: 0.7,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
    paddingRight: wp(10),
  },
  questionNumber: {
    fontSize: sp(22),
    fontFamily: FONTS.Bold,
    color: COLORS.yellow,
    textShadowColor: COLORS.yellow_border,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  questionText: {
    fontSize: sp(16),
    textAlign: 'center',
  },
  answersContainer: {
    width: '100%',
    paddingHorizontal: wp(12),
    gap: wp(6),
    marginBottom: hp(14),
  },
  answerContainer: {
    width: '100%',
    paddingVertical: hp(4),
    paddingHorizontal: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    fontSize: sp(16),
    textAlign: 'center',
    color: COLORS.black,
  },
  nextButton: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
  },
  nextButtonText: {
    fontSize: sp(20),
    color: COLORS.black,
  },
});
