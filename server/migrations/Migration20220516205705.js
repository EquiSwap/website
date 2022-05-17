'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220516205705 extends Migration {

  async up() {
    this.addSql('create table "trades" ("id" uuid not null default gen_random_uuid(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "product_a_id" uuid not null, "product_b_id" uuid not null, "leverage_a" int null, "leverage_b" int null);');
    this.addSql('alter table "trades" add constraint "trades_pkey" primary key ("id");');

    this.addSql('alter table "trades" add constraint "trades_product_a_id_foreign" foreign key ("product_a_id") references "products" ("id") on update cascade;');
    this.addSql('alter table "trades" add constraint "trades_product_b_id_foreign" foreign key ("product_b_id") references "products" ("id") on update cascade;');

    this.addSql('alter table "products" add column "active" boolean not null default true;');
  }

  async down() {
    this.addSql('drop table if exists "trades" cascade;');

    this.addSql('alter table "products" drop column "active";');
  }

}
exports.Migration20220516205705 = Migration20220516205705;
