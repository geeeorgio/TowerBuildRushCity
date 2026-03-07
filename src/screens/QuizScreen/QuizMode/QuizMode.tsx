import React, { useState } from 'react';
import { Image, View } from 'react-native';

import QuizTimer from '../QuizTimer/QuizTimer';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GUIDE_MAN_IMAGES } from 'src/constants';
import type { QuizModeStateType } from 'src/types';

interface QuizModeProps {
  quizState: QuizModeStateType;
  onNextQuestion: (isCorrect: boolean) => void;
}

const QuizMode = ({ quizState, onNextQuestion }: QuizModeProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentQuestion = quizState.quizList[quizState.currentQuestionIdx];
  const isLastQuestion =
    quizState.currentQuestionIdx + 1 === quizState.totalQuestions;

  const handleAction = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    } else {
      const isCorrect = selectedAnswer === currentQuestion.correctValue;
      onNextQuestion(isCorrect);

      setSelectedAnswer(null);
      setIsRevealed(false);
    }
  };

  const getAnswerVariant = (option: string) => {
    if (isRevealed) {
      if (option === currentQuestion.correctValue) return 'green';
      if (option === selectedAnswer) return 'red';
      return 'yellow';
    }
    return selectedAnswer === option ? 'blue' : 'yellow';
  };

  return (
    <View style={styles.container}>
      <QuizTimer
        key={quizState.currentQuestionIdx}
        time={quizState.time}
        onTimeEnd={() => setIsRevealed(true)}
        stopTimer={isRevealed}
      />

      <View style={styles.questionContainer}>
        <CustomContainer
          colorVariant="lightBlue"
          style={styles.questionContainer}
        >
          <View style={styles.questionImageContainer}>
            <Image
              source={GUIDE_MAN_IMAGES.brick_man}
              style={styles.questionImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.questionTextContainer}>
            <CustomText style={styles.questionNumber}>
              {`Question ${quizState.currentQuestionIdx + 1}/${quizState.totalQuestions}`}
            </CustomText>
            <CustomText style={styles.questionText}>
              {quizState.quizList[quizState.currentQuestionIdx].question}
            </CustomText>
          </View>
        </CustomContainer>
      </View>

      <View style={styles.answersContainer}>
        {quizState.quizList[quizState.currentQuestionIdx].options.map(
          (option, index) => (
            <CustomButton
              key={option + index}
              variant={getAnswerVariant(option)}
              style={styles.answerContainer}
              onPress={() => !isRevealed && setSelectedAnswer(option)}
              disabled={isRevealed}
            >
              <CustomText style={styles.answerText}>{option}</CustomText>
            </CustomButton>
          ),
        )}
      </View>

      {(selectedAnswer || isRevealed) && (
        <CustomButton onPress={handleAction} style={styles.nextButton}>
          <CustomText style={styles.nextButtonText}>
            {!isRevealed
              ? 'Choose'
              : isLastQuestion
                ? 'Result'
                : 'Next question'}
          </CustomText>
        </CustomButton>
      )}
    </View>
  );
};

export default QuizMode;
