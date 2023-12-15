import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTvosemКодБрониLForm from './forms/i-i-s-tvosem-код-брони-l';
import IISTvosemМестоНаРейсLForm from './forms/i-i-s-tvosem-место-на-рейс-l';
import IISTvosemПассажирLForm from './forms/i-i-s-tvosem-пассажир-l';
import IISTvosemПосадТалонLForm from './forms/i-i-s-tvosem-посад-талон-l';
import IISTvosemРейсLForm from './forms/i-i-s-tvosem-рейс-l';
import IISTvosemКодБрониEForm from './forms/i-i-s-tvosem-код-брони-e';
import IISTvosemМестоНаРейсEForm from './forms/i-i-s-tvosem-место-на-рейс-e';
import IISTvosemПассажирEForm from './forms/i-i-s-tvosem-пассажир-e';
import IISTvosemПосадТалонEForm from './forms/i-i-s-tvosem-посад-талон-e';
import IISTvosemРейсEForm from './forms/i-i-s-tvosem-рейс-e';
import IISTvosemИнфБроньModel from './models/i-i-s-tvosem-инф-бронь';
import IISTvosemКодБрониModel from './models/i-i-s-tvosem-код-брони';
import IISTvosemМестоНаРейсModel from './models/i-i-s-tvosem-место-на-рейс';
import IISTvosemПассажирModel from './models/i-i-s-tvosem-пассажир';
import IISTvosemПосадТалонModel from './models/i-i-s-tvosem-посад-талон';
import IISTvosemРейсModel from './models/i-i-s-tvosem-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tvosem-инф-бронь': IISTvosemИнфБроньModel,
    'i-i-s-tvosem-код-брони': IISTvosemКодБрониModel,
    'i-i-s-tvosem-место-на-рейс': IISTvosemМестоНаРейсModel,
    'i-i-s-tvosem-пассажир': IISTvosemПассажирModel,
    'i-i-s-tvosem-посад-талон': IISTvosemПосадТалонModel,
    'i-i-s-tvosem-рейс': IISTvosemРейсModel
  },

  'application-name': 'Терминал',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Терминал',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Терминал',
          title: 'Tvosem'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        tvosem: {
          caption: 'Tvosem',
          title: 'Tvosem',
          'i-i-s-tvosem-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-tvosem-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-tvosem-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-tvosem-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-tvosem-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tvosem-код-брони-l': IISTvosemКодБрониLForm,
    'i-i-s-tvosem-место-на-рейс-l': IISTvosemМестоНаРейсLForm,
    'i-i-s-tvosem-пассажир-l': IISTvosemПассажирLForm,
    'i-i-s-tvosem-посад-талон-l': IISTvosemПосадТалонLForm,
    'i-i-s-tvosem-рейс-l': IISTvosemРейсLForm,
    'i-i-s-tvosem-код-брони-e': IISTvosemКодБрониEForm,
    'i-i-s-tvosem-место-на-рейс-e': IISTvosemМестоНаРейсEForm,
    'i-i-s-tvosem-пассажир-e': IISTvosemПассажирEForm,
    'i-i-s-tvosem-посад-талон-e': IISTvosemПосадТалонEForm,
    'i-i-s-tvosem-рейс-e': IISTvosemРейсEForm
  },

});

export default translations;
