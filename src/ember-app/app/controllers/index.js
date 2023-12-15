import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tvosem.caption'),
          title: i18n.t('forms.application.sitemap.tvosem.title'),
          children: [{
            link: 'i-i-s-tvosem-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-посад-талон-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-tvosem-код-брони-l',
            caption: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-код-брони-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-tvosem-рейс-l',
            caption: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-рейс-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-tvosem-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-место-на-рейс-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-tvosem-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tvosem.i-i-s-tvosem-пассажир-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})