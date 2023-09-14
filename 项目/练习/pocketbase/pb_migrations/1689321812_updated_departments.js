migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
