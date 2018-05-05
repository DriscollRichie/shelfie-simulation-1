module.exports = {
  getInventory: (req, res) => {
    let db = req.app.get("db");
    db.get_inventory().then(inventory => res.status(200).send(inventory));
  },

  addProduct: (req, res) => {
    let db = req.app.get("db");
    let { name, price, image } = req.body;
    db.create_product([name, price, image]).then(ok => res.sendStatus(200));
  },

  deleteProduct: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db
      .delete_product({
        id
      })
      .then(data => {
        db.get_inventory().then(data => {
          res.status(200).send(data);
        });
      });
  }
};
