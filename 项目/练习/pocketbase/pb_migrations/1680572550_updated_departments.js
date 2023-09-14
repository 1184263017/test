migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  // remove
  collection.schema.removeField("ngswvnc5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ngswvnc5",
    "name": "pid",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
