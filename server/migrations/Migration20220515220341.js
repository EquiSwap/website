'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220515220341 extends Migration {

  async up() {
    this.addSql('alter table "product_categories" add column "slug" varchar(255) not null, add column "image" text not null;');
    this.addSql('alter table "product_categories" add constraint "product_categories_slug_unique" unique ("slug");');
  }

  async down() {
    this.addSql('alter table "product_categories" drop constraint "product_categories_slug_unique";');
    this.addSql('alter table "product_categories" drop column "slug";');
    this.addSql('alter table "product_categories" drop column "image";');
  }

}
exports.Migration20220515220341 = Migration20220515220341;
