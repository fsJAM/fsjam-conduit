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
    await db.profile.create({
      data: {
        name: process.env.DEFAULT_USER_ADMIN_PROFILE_NAME,
        bio: process.env.DEFAULT_USER_ADMIN_PROFILE_BIO,
        user: {
          connect: { email: process.env.DEFAULT_USER_ADMIN_EMAIL },
        }
      }
    })
    console.log('default admin user and profile created')

    await db.user.create({
      data: {
        email: 'ludovido.einaudi@redwoodjs.com',
        password: 'divenire'
      }
    })

    await db.profile.create({
      data: {
        name: 'Ludovico Einaudi',
        bio: 'Ludovico Maria Enrico Einaudi OMRI is an Italian pianist and composer. Trained at the Conservatorio Verdi in Milan, Einaudi began his career as a classical composer, later incorporating other styles and genres such as pop, rock, folk, and world music.',
        image: 'https://dev-to-uploads.s3.amazonaws.com/i/o6i3iumonv1n4glfly0x.jpg',
        user: {
          connect: { email: 'ludovido.einaudi@redwoodjs.com' },
        }
      }
    })
    console.log('Ludovico Einaudi\'s profile created')

    await db.user.create({
      data: {
        email: 'howard.shore@redwoodjs.com',
        password: 'MadeInMilan'
      }
    })

    await db.profile.create({
      data: {
        name: 'Howard Shore',
        bio: 'Howard Leslie Shore OC is a Canadian composer and conductor noted for his film scores. He has composed the scores for over 80 films, most notably the scores for The Lord of the Rings and The Hobbit film trilogies.',
        image: 'https://dev-to-uploads.s3.amazonaws.com/i/qn6mxutswsolngsgsezg.jpg',
        user: {
          connect: { email: 'howard.shore@redwoodjs.com' },
        }
      }
    })
    console.log('Howard Shore\'s profile created')

    await db.user.create({
      data: {
        email: 'james.horner@redwoodjs.com',
        password: 'apollo13'
      }
    })

    await db.profile.create({
      data: {
        name: 'James Horner',
        bio: 'James Roy Horner was an American composer, conductor and orchestrator of over 100 film scores. He was known for the integration of choral and electronic elements, and for his frequent use of motifs associated with Celtic music.',
        image: 'https://dev-to-uploads.s3.amazonaws.com/i/xrsbx33q9qrzijx4i3ck.jpg',
        user: {
          connect: { email: 'james.horner@redwoodjs.com' },
        }
      }
    })
    console.log('James Horner\'s profile created')


  }

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
