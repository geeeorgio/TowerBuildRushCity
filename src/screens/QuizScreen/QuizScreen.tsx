import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import GameAlertModal from '../GameScreen/GameAlertModal/GameAlertModal';

import QuizIntro from './QuizIntro/QuizIntro';
import QuizMode from './QuizMode/QuizMode';
import QuizResults from './QuizResults/QuizResults';
import { styles } from './styles';

import { CustomHeader } from 'src/components';
import { GAME_QUIZ, QUIZ_TIMER_MS, SINGLE_QUIZ_QUESTIONS } from 'src/constants';
import type {
  MainStackNavigationProp,
  QuizModeStateType,
  QuizStatusType,
} from 'src/types';
import { shuffleArray } from 'src/utils';

const createInitialState = (): QuizModeStateType => ({
  currentQuestionIdx: 0,
  correctAnswers: 0,
  totalQuestions: SINGLE_QUIZ_QUESTIONS,
  quizList: shuffleArray(GAME_QUIZ).slice(0, SINGLE_QUIZ_QUESTIONS),
  time: QUIZ_TIMER_MS,
});

const QuizScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const [status, setStatus] = useState<QuizStatusType>('intro');
  const [state, setState] = useState<QuizModeStateType>(createInitialState());
  const [showAlert, setShowAlert] = useState(false);

  const handleNextQuestion = useCallback((isCorrect: boolean) => {
    setState((prev) => {
      const nextAnswers = isCorrect
        ? prev.correctAnswers + 1
        : prev.correctAnswers;

      const isLastQuestion =
        prev.currentQuestionIdx + 1 === prev.totalQuestions;

      if (isLastQuestion) {
        setStatus('completed');
        return { ...prev, correctAnswers: nextAnswers };
      }

      return {
        ...prev,
        currentQuestionIdx: prev.currentQuestionIdx + 1,
        time: QUIZ_TIMER_MS,
        correctAnswers: nextAnswers,
      };
    });
  }, []);

  const handleQuitGame = () => {
    setShowAlert(false);

    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
          title="Quiz"
          onGoBack={status === 'pending' ? () => setShowAlert(true) : undefined}
        />
      </View>
      <View style={styles.contentContainer}>
        {status === 'intro' && (
          <QuizIntro onStartQuiz={() => setStatus('pending')} />
        )}

        {status === 'pending' && (
          <QuizMode quizState={state} onNextQuestion={handleNextQuestion} />
        )}

        {status === 'completed' && (
          <QuizResults correctAnswers={state.correctAnswers} />
        )}
      </View>

      {showAlert && (
        <GameAlertModal
          isVisible={showAlert}
          onBackToGame={() => setShowAlert(false)}
          onBackToMenu={handleQuitGame}
        />
      )}
    </View>
  );
};

export default QuizScreen;
