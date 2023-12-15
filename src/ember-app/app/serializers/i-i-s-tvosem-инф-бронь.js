import { Serializer as ИнфБроньSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tvosem-инф-бронь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфБроньSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
