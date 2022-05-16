'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220515232138 extends Migration {

  async up() {
    this.addSql('alter table "products" alter column "will_trade_for" type varchar(255) using ("will_trade_for"::varchar(255));');
    this.addSql('alter table "products" alter column "will_trade_for" drop not null;');
  }

  async down() {
    this.addSql('alter table "products" alter column "will_trade_for" type varchar(255) using ("will_trade_for"::varchar(255));');
    this.addSql('alter table "products" alter column "will_trade_for" set not null;');
  }

}
exports.Migration20220515232138 = Migration20220515232138;
