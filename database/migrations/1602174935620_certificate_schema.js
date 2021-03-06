'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CertificateSchema extends Schema {
  up () {
    this.create('certificates', (table) => {
      table.increments()
      table.integer('person_id');
      table.string('password');
      table.string('file');
      table.string('image');
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('certificates')
  }
}

module.exports = CertificateSchema
