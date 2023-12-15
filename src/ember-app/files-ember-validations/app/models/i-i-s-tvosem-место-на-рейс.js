import {
  defineNamespace,
  defineProjections,
  Model as МестоНаРейсMixin
} from '../mixins/regenerated/models/i-i-s-tvosem-место-на-рейс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоНаРейсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
