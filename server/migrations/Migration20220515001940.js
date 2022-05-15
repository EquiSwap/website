'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20220515001940 extends Migration {

  async up() {
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');
    this.addSql('alter table "users" add constraint "users_username_unique" unique ("username");');
  }

  async down() {
    this.addSql('alter table "users" drop constraint "users_email_unique";');
    this.addSql('alter table "users" drop constraint "users_username_unique";');
  }

}
exports.Migration20220515001940 = Migration20220515001940;
