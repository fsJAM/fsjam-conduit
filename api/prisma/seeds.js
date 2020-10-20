/* eslint-disable no-console */
const {PrismaClient} = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it).

  const existing = await db.user.findMany({where: {email: process.env.DEFAULT_USER_ADMIN_EMAIL}})

  if (!existing.length) {
    await db.user.create({
      data: {
        email: process.env.DEFAULT_USER_ADMIN_EMAIL,
        password: process.env.DEFAULT_USER_ADMIN_PASSWORD
      }
    })
    console.log('default admin user created')
  }

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
