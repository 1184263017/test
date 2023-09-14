migrate((db) => {
  const collection = new Collection({
    "id": "vogx5el89ajeqlh",
    "created": "2023-04-04 01:36:54.956Z",
    "updated": "2023-04-04 01:36:54.956Z",
    "name": "departments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vki8g606",
        "name": "label",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "er7rannq",
        "name": "sort",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vogx5el89ajeqlh");

  return dao.deleteCollection(collection);
})
