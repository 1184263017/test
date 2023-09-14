migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
