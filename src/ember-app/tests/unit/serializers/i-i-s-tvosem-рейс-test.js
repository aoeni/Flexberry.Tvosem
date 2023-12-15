import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tvosem-рейс', 'Unit | Serializer | i-i-s-tvosem-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tvosem-рейс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tvosem-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
