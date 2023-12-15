import { Serializer as КодБрониSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tvosem-код-брони';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КодБрониSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
