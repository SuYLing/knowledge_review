import { countPostsByUser, getAveragePostNumber } from "./concepts/aggregation.js"
import { getAllUsersWithTheirPosts, getUsersWithPosts } from "./concepts/join.js"
import { insertPost } from "./concepts/relationships.js"
import { getPaginatedUsers } from "./concepts/sorting-pagination.js"
async function testQueries() {
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
// testQueries()
async function testRelationsQeurise() {
  try {
    // 建表
    // await createPostTable()
    // 插入数据
    await insertPost(12, "first artical", "daskjhdaskgd askdjghaskdgha")
    await insertPost(12, "second artical", "daskjhdaskgd askdjghaskdgha")
    await insertPost(12, "third artical", "daskjhdaskgd askdjghaskdgha")
    await insertPost(12, "fourth artical", "daskjhdaskgd askdjghaskdgha")
  }
  catch (err) {
    console.log(err)
  }
}
// testRelationsQeurise()
async function testJoinQueries() {
  try {
    await getUsersWithPosts()
    await getAllUsersWithTheirPosts()
  } catch (error) {
    console.log(error)
  }
}
// testJoinQueries()
async function testAggregationQueries() {
  try {
    await countPostsByUser()
    await getAveragePostNumber()
  } catch (error) {
    console.log(error)
  }
}
testAggregationQueries()