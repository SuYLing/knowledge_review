import { getSortedUsers,getPaginatedUsers } from "./concepts/sorting-pagination.js"

async function testQueries(params) {
  try {
    // await insertUser("yuling", "sadad@gmail.com")
    // await insertUser("sak", "saewdad@gmail.com")
    // await insertUser("dsds", "sagfddad@gmail.com")
    // await insertUser("gdg", "sadgfdad@gmail.com")
    // await insertUser("yrty", "sagfdad@gmail.com")
    // await insertUser("hfghfg", "hfg@gmail.com")
    // deleteUser("hfghfg")
    // await updateUser(12,"sakurige","sakurige@gmail.com")
    //  await queryUserById(12)
    // await getSortedUsers("create_at",
    //   "DESC"
    // )
    await getPaginatedUsers()
  } catch (error) {
    console.log(error)
  }
}

testQueries()