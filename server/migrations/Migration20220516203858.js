'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220516203858 extends Migration {

  async up() {
    this.addSql('create table "messages" ("id" uuid not null default gen_random_uuid(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "type" text check ("type" in (\'chat\', \'product\')) not null, "message" text not null, "author_id" uuid not null);');
    this.addSql('alter table "messages" add constraint "messages_pkey" primary key ("id");');

    this.addSql('alter table "messages" add constraint "messages_author_id_foreign" foreign key ("author_id") references "users" ("id") on update cascade;');
  }

  async down() {
    this.addSql('drop table if exists "messages" cascade;');
  }

}
exports.Migration20220516203858 = Migration20220516203858;
