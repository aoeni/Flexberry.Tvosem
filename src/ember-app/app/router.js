import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tvosem-код-брони-l');
  this.route('i-i-s-tvosem-код-брони-e',
  { path: 'i-i-s-tvosem-код-брони-e/:id' });
  this.route('i-i-s-tvosem-код-брони-e.new',
  { path: 'i-i-s-tvosem-код-брони-e/new' });
  this.route('i-i-s-tvosem-место-на-рейс-l');
  this.route('i-i-s-tvosem-место-на-рейс-e',
  { path: 'i-i-s-tvosem-место-на-рейс-e/:id' });
  this.route('i-i-s-tvosem-место-на-рейс-e.new',
  { path: 'i-i-s-tvosem-место-на-рейс-e/new' });
  this.route('i-i-s-tvosem-пассажир-l');
  this.route('i-i-s-tvosem-пассажир-e',
  { path: 'i-i-s-tvosem-пассажир-e/:id' });
  this.route('i-i-s-tvosem-пассажир-e.new',
  { path: 'i-i-s-tvosem-пассажир-e/new' });
  this.route('i-i-s-tvosem-посад-талон-l');
  this.route('i-i-s-tvosem-посад-талон-e',
  { path: 'i-i-s-tvosem-посад-талон-e/:id' });
  this.route('i-i-s-tvosem-посад-талон-e.new',
  { path: 'i-i-s-tvosem-посад-талон-e/new' });
  this.route('i-i-s-tvosem-рейс-l');
  this.route('i-i-s-tvosem-рейс-e',
  { path: 'i-i-s-tvosem-рейс-e/:id' });
  this.route('i-i-s-tvosem-рейс-e.new',
  { path: 'i-i-s-tvosem-рейс-e/new' });
});

export default Router;
