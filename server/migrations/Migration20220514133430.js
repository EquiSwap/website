'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220514133430 extends Migration {

  async up() {
    this.addSql('create table "users" ("id" uuid not null default gen_random_uuid(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" varchar(255) not null, "username" varchar(255) not null, "display_name" text null, "profile_picture" text null, "date_of_birth" date not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("id");');

    this.addSql('create table "session" ("id" uuid not null default gen_random_uuid(), "user_id" uuid not null, "ip_address" varchar(255) null, "token" varchar(684) not null, "started" timestamptz(0) not null);');
    this.addSql('alter table "session" add constraint "session_user_id_unique" unique ("user_id");');
    this.addSql('alter table "session" add constraint "session_token_unique" unique ("token");');
    this.addSql('alter table "session" add constraint "session_pkey" primary key ("id");');

    this.addSql('alter table "session" add constraint "session_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');
  }

  async down() {
    this.addSql('alter table "session" drop constraint "session_user_id_foreign";');

    this.addSql('drop table if exists "users" cascade;');

    this.addSql('drop table if exists "session" cascade;');
  }

}
exports.Migration20220514133430 = Migration20220514133430;
