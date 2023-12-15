import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  класс: DS.attr('i-i-s-tvosem-класс-билета'),
  место: DS.attr('string')
});

export let ValidationRules = {
  класс: {
    descriptionKey: 'models.i-i-s-tvosem-место-на-рейс.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-tvosem-место-на-рейс.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоНаРейсE', 'i-i-s-tvosem-место-на-рейс', {
    класс: attr('Класс', { index: 0 }),
    место: attr('Место', { index: 1 })
  });

  modelClass.defineProjection('МестоНаРейсL', 'i-i-s-tvosem-место-на-рейс', {
    класс: attr('Класс', { index: 0 }),
    место: attr('Место', { index: 1 })
  });
};
