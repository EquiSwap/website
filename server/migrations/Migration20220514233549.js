'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220514233549 extends Migration {

  async up() {
    this.addSql('alter table "users" add column "postcode" varchar(255) null, add column "street" varchar(255) null, add column "county" varchar(255) null, add column "country" varchar(255) null;');
  }

  async down() {
    this.addSql('alter table "users" drop column "postcode";');
    this.addSql('alter table "users" drop column "street";');
    this.addSql('alter table "users" drop column "county";');
    this.addSql('alter table "users" drop column "country";');
  }

}
exports.Migration20220514233549 = Migration20220514233549;
