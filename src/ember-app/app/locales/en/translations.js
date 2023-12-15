import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Терминал',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Терминал',
          title: 'Терминал'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
