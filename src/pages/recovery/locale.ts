import { getDIContainer } from "@/shared/di";

export const localePage = getDIContainer().localeService.defineLocale("recovery", {
  En: {
    title: "Password recovery",
    body_form: "Enter your email and we will send you a link to reset your password",
    input_email: "Email",
    button_submit: "Reset the password",
    button_login: "Authorization",
  },
  Ru: {
    title: "Восстановление пароля",
    body_form: "Введите свой email и мы отправим вам ссылку для восстановления пароля",
    input_email: "Эл. адрес",
    button_submit: "Сбросить пароль",
    button_login: "Авторизация",
  },
  Uk: {
    title: "Відновлення паролю",
    body_form: "Введіть свій email і ми надішлемо вам посилання для відновлення пароля",
    input_email: "Електронна пошта",
    button_submit: "Скинути пароль",
    button_login: "Авторизація",
  },
});
