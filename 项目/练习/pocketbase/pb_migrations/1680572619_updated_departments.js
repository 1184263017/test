migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oge2a8ho",
    "name": "pid",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vogx5el89ajeqlh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  // remove
  collection.schema.removeField("oge2a8ho")

  return dao.saveCollection(collection)
})
