'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220514133700 extends Migration {

  async up() {
    this.addSql('alter table "session" drop constraint "session_user_id_foreign";');

    this.addSql('alter table "session" add constraint "session_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete cascade;');
  }

  async down() {
    this.addSql('alter table "session" drop constraint "session_user_id_foreign";');

    this.addSql('alter table "session" add constraint "session_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');
  }

}
exports.Migration20220514133700 = Migration20220514133700;
