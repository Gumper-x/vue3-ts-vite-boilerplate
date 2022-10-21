import { getDIContainer } from "@/shared/di";

export const localePage = getDIContainer().localeService.defineLocale("login", {
  En: {
    title: "Log In",
    body_form: "Welcome! Please, enter your username and password below to login",
    input_username: "Username",
    input_password: "Password",
    label_remember: "Remember me",
    button_submit: "Login",
    button_recovery: "Forgot your password?",
  },
  Ru: {
    title: "Вход",
    body_form: "Добро пожаловать! Пожалуйста, введите ваши имя пользователя и пароль для входа в систему",
    input_username: "Имя пользователя",
    input_password: "Пароль",
    label_remember: "Запомнить меня",
    button_submit: "Войти",
    button_recovery: "Забыли пароль?",
  },
  Uk: {
    title: "Вхід",
    body_form: "Ласкаво просимо! Будь ласка, введіть ваші ім'я користувача та пароль для входу в систему",
    input_username: "Ім'я користувача",
    input_password: "Пароль",
    label_remember: "Запам'ятати мене",
    button_submit: "Увійти",
    button_recovery: "Забули пароль?",
  },
});
