import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтпр: DS.attr('string'),
  выход: DS.attr('string'),
  дата: DS.attr('date'),
  конецПосад: DS.attr('string'),
  куда: DS.attr('string'),
  начПосад: DS.attr('string'),
  откуда: DS.attr('string'),
  инфБронь: DS.hasMany('i-i-s-tvosem-инф-бронь', { inverse: 'рейс', async: false })
});

export let ValidationRules = {
  времяОтпр: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.времяОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выход: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.выход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  конецПосад: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.конецПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  куда: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.куда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начПосад: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.начПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  откуда: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.откуда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инфБронь: {
    descriptionKey: 'models.i-i-s-tvosem-рейс.validations.инфБронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РейсE', 'i-i-s-tvosem-рейс', {
    куда: attr('Куда', { index: 0 }),
    откуда: attr('Откуда', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    времяОтпр: attr('Время отпр', { index: 3 }),
    начПосад: attr('Нач посад', { index: 4 }),
    конецПосад: attr('Конец посад', { index: 5 }),
    выход: attr('Выход', { index: 6 }),
    инфБронь: hasMany('i-i-s-tvosem-инф-бронь', 'Инф бронь', {
      пассажир: belongsTo('i-i-s-tvosem-пассажир', 'Пассажир', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        местоНаРейс: belongsTo('i-i-s-tvosem-место-на-рейс', '', {
          место: attr('Место', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РейсL', 'i-i-s-tvosem-рейс', {
    куда: attr('Куда', { index: 0 }),
    откуда: attr('Откуда', { index: 1 }),
    времяОтпр: attr('Время отпр', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    начПосад: attr('Нач посад', { index: 4 }),
    конецПосад: attr('Конец посад', { index: 5 }),
    выход: attr('Выход', { index: 6 })
  });
};
