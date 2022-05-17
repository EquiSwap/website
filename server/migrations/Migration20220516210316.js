'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220516210316 extends Migration {

  async up() {
    this.addSql('alter table "products" drop constraint "products_owner_id_foreign";');

    this.addSql('alter table "products" alter column "owner_id" drop default;');
    this.addSql('alter table "products" alter column "owner_id" type uuid using ("owner_id"::text::uuid);');
    this.addSql('alter table "products" alter column "owner_id" drop not null;');
    this.addSql('alter table "products" add constraint "products_owner_id_foreign" foreign key ("owner_id") references "users" ("id") on update cascade on delete set null;');

    this.addSql('alter table "trades" add column "payment_status" text check ("payment_status" in (\'pending\', \'completed\')) not null;');
    this.addSql('alter table "trades" drop constraint "trades_pkey";');
    this.addSql('alter table "trades" drop column "id";');
    this.addSql('alter table "trades" add constraint "trades_pkey" primary key ("product_a_id", "product_b_id");');
  }

  async down() {
    this.addSql('alter table "products" drop constraint "products_owner_id_foreign";');

    this.addSql('alter table "products" alter column "owner_id" drop default;');
    this.addSql('alter table "products" alter column "owner_id" type uuid using ("owner_id"::text::uuid);');
    this.addSql('alter table "products" alter column "owner_id" set not null;');
    this.addSql('alter table "products" add constraint "products_owner_id_foreign" foreign key ("owner_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "trades" add column "id" uuid not null default gen_random_uuid();');
    this.addSql('alter table "trades" drop constraint "trades_pkey";');
    this.addSql('alter table "trades" drop column "payment_status";');
    this.addSql('alter table "trades" add constraint "trades_pkey" primary key ("id");');
  }

}
exports.Migration20220516210316 = Migration20220516210316;
