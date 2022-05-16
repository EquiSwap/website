'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220515142232 extends Migration {

  async up() {
    this.addSql('create table "product_categories" ("id" uuid not null default gen_random_uuid(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
    this.addSql('alter table "product_categories" add constraint "product_categories_name_unique" unique ("name");');
    this.addSql('alter table "product_categories" add constraint "product_categories_pkey" primary key ("id");');

    this.addSql('create table "products" ("id" uuid not null default gen_random_uuid(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" text not null, "image" text not null, "category_id" uuid not null, "will_trade_for" varchar(255) not null, "owner_id" uuid not null);');
    this.addSql('alter table "products" add constraint "products_pkey" primary key ("id");');

    this.addSql('alter table "products" add constraint "products_category_id_foreign" foreign key ("category_id") references "product_categories" ("id") on update cascade;');
    this.addSql('alter table "products" add constraint "products_owner_id_foreign" foreign key ("owner_id") references "users" ("id") on update cascade;');
  }

  async down() {
    this.addSql('alter table "products" drop constraint "products_category_id_foreign";');

    this.addSql('drop table if exists "product_categories" cascade;');

    this.addSql('drop table if exists "products" cascade;');
  }

}
exports.Migration20220515142232 = Migration20220515142232;
