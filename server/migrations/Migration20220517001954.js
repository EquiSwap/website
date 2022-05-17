'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220517001954 extends Migration {

  async up() {
    this.addSql('alter table "messages" add column "target_id" uuid not null;');
    this.addSql('alter table "messages" add constraint "messages_target_id_foreign" foreign key ("target_id") references "users" ("id") on update cascade;');
  }

  async down() {
    this.addSql('alter table "messages" drop constraint "messages_target_id_foreign";');

    this.addSql('alter table "messages" drop column "target_id";');
  }

}
exports.Migration20220517001954 = Migration20220517001954;
