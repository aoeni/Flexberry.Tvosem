import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tvosem-код-брони', 'Unit | Model | i-i-s-tvosem-код-брони', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tvosem-инф-бронь',
    'model:i-i-s-tvosem-код-брони',
    'model:i-i-s-tvosem-место-на-рейс',
    'model:i-i-s-tvosem-пассажир',
    'model:i-i-s-tvosem-посад-талон',
    'model:i-i-s-tvosem-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
