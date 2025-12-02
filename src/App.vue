<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { questions, type Question } from './data/questions';

interface QuizQuestion extends Question {
  selectedAnswer: string | null;
  showFeedback: boolean;
}

const quizQuestions = ref<QuizQuestion[]>([]);
const currentQuestionIndex = ref(0);
const score = ref(0);
const totalAnswered = ref(0);

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j]!;
    shuffled[j] = temp!;
  }
  return shuffled;
};

// Initialize quiz with shuffled questions
const initializeQuiz = () => {
  const shuffledQuestions = shuffleArray(questions);
  quizQuestions.value = shuffledQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options), // Also shuffle options
    selectedAnswer: null,
    showFeedback: false
  }));
  currentQuestionIndex.value = 0;
  score.value = 0;
  totalAnswered.value = 0;
};

onMounted(() => {
  initializeQuiz();
});

const currentQuestion = computed(() => quizQuestions.value[currentQuestionIndex.value]);

const selectAnswer = (option: string) => {
  if (!currentQuestion.value || currentQuestion.value.showFeedback) return;
  
  currentQuestion.value.selectedAnswer = option;
  currentQuestion.value.showFeedback = true;
  totalAnswered.value++;
  
  if (option === currentQuestion.value.correctAnswer) {
    score.value++;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < quizQuestions.value.length - 1) {
    currentQuestionIndex.value++;
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

const restartQuiz = () => {
  initializeQuiz();
};

const getOptionClass = (option: string) => {
  if (!currentQuestion.value?.showFeedback) return '';
  
  if (option === currentQuestion.value.correctAnswer) {
    return 'correct';
  }
  
  if (option === currentQuestion.value.selectedAnswer && option !== currentQuestion.value.correctAnswer) {
    return 'incorrect';
  }
  
  return 'disabled';
};

const progressPercentage = computed(() => {
  return (totalAnswered.value / quizQuestions.value.length) * 100;
});
</script>

<template>
  <div class="quiz-container">
    <header class="quiz-header">
      <h1>Application Development Mock Exam</h1>
      <div class="stats">
        <span class="score">Score: {{ score }} / {{ totalAnswered }}</span>
        <span class="progress">Progress: {{ totalAnswered }} / {{ quizQuestions.length }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </header>

    <main v-if="currentQuestion" class="quiz-content">
      <div class="question-header">
        <span class="question-number">Question {{ currentQuestionIndex + 1 }} of {{ quizQuestions.length }}</span>
      </div>

      <div class="question-card">
        <h2 class="question-text">{{ currentQuestion.question }}</h2>

        <div class="options">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            class="option-btn"
            :class="getOptionClass(option)"
            @click="selectAnswer(option)"
            :disabled="currentQuestion.showFeedback"
          >
            <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
            <span class="option-text">{{ option }}</span>
          </button>
        </div>

        <transition name="fade">
          <div v-if="currentQuestion.showFeedback" class="feedback">
            <div 
              class="feedback-message"
              :class="currentQuestion.selectedAnswer === currentQuestion.correctAnswer ? 'success' : 'error'"
            >
              <span class="feedback-icon">
                {{ currentQuestion.selectedAnswer === currentQuestion.correctAnswer ? '✓' : '✗' }}
              </span>
              <span class="feedback-text">
                {{ currentQuestion.selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!' }}
              </span>
            </div>
            <div class="explanation">
              <strong>Explanation:</strong> {{ currentQuestion.explanation }}
            </div>
          </div>
        </transition>
      </div>

      <div class="navigation">
        <button 
          class="nav-btn" 
          @click="previousQuestion" 
          :disabled="currentQuestionIndex === 0"
        >
          ← Previous
        </button>
        <button 
          class="nav-btn restart-btn" 
          @click="restartQuiz"
        >
          🔄 Restart Quiz
        </button>
        <button 
          class="nav-btn" 
          @click="nextQuestion" 
          :disabled="currentQuestionIndex === quizQuestions.length - 1"
        >
          Next →
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Custom Scrollbar Styles */
.quiz-content::-webkit-scrollbar,
.question-card::-webkit-scrollbar {
  width: 8px;
}

.quiz-content::-webkit-scrollbar-track,
.question-card::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.quiz-content::-webkit-scrollbar-thumb,
.question-card::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

.quiz-content::-webkit-scrollbar-thumb:hover,
.question-card::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* Firefox Scrollbar */
.quiz-content,
.question-card {
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f5f9;
}

.quiz-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

.quiz-header {
  text-align: center;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 12px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.quiz-header h1 {
  margin: 0 0 12px 0;
  font-size: 1.8em;
  font-weight: 700;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 0.95em;
}

.score, .progress {
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22c55e);
  transition: width 0.3s ease;
}

.quiz-content {
  animation: slideIn 0.3s ease;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.question-header {
  margin-bottom: 10px;
  flex-shrink: 0;
}

.question-number {
  display: inline-block;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  color: #475569;
  font-size: 0.85em;
}

.question-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
}

.question-text {
  font-size: 1.1em;
  color: #1e293b;
  margin-bottom: 15px;
  line-height: 1.5;
  font-weight: 600;
  flex-shrink: 0;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-size: 0.95em;
}

.option-btn:hover:not(:disabled) {
  border-color: #667eea;
  background: #f8fafc;
  transform: translateX(5px);
}

.option-btn:disabled {
  cursor: not-allowed;
}

.option-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #f1f5f9;
  border-radius: 50%;
  font-weight: 700;
  color: #475569;
  flex-shrink: 0;
  font-size: 0.9em;
}

.option-text {
  flex: 1;
  color: #334155;
}

.option-btn.correct {
  border-color: #22c55e;
  background: #f0fdf4;
}

.option-btn.correct .option-letter {
  background: #22c55e;
  color: white;
}

.option-btn.incorrect {
  border-color: #ef4444;
  background: #fef2f2;
}

.option-btn.incorrect .option-letter {
  background: #ef4444;
  color: white;
}

.option-btn.disabled {
  opacity: 0.5;
}

.feedback {
  margin-top: 15px;
  animation: fadeIn 0.3s ease;
  flex-shrink: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feedback-message {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 0.95em;
}

.feedback-message.success {
  background: #dcfce7;
  color: #166534;
  border: 2px solid #22c55e;
}

.feedback-message.error {
  background: #fee2e2;
  color: #991b1b;
  border: 2px solid #ef4444;
}

.feedback-icon {
  font-size: 1.3em;
}

.explanation {
  background: #f8fafc;
  padding: 12px 15px;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  line-height: 1.5;
  color: #334155;
  font-size: 0.9em;
}

.explanation strong {
  color: #667eea;
  margin-right: 5px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 0;
}

.nav-btn {
  padding: 10px 20px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9em;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.restart-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.restart-btn:hover {
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .quiz-container {
    padding: 10px;
  }

  .quiz-header {
    padding: 20px;
  }

  .quiz-header h1 {
    font-size: 1.8em;
  }

  .stats {
    flex-direction: column;
    gap: 10px;
  }

  .question-card {
    padding: 25px;
  }

  .question-text {
    font-size: 1.2em;
  }

  .option-btn {
    padding: 15px;
  }

  .navigation {
    flex-wrap: wrap;
  }

  .nav-btn {
    flex: 1;
    min-width: 120px;
  }

  .restart-btn {
    order: 3;
    flex-basis: 100%;
  }
}
</style>
