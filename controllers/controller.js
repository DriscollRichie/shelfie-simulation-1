module.exports = {
  getInventory: (req, res) => {
    let db = req.app.get("db");
    db.get_inventory().then(inventory => res.status(200).send(inventory));
  },

  addProduct: (req, res) => {
    let db = req.app.get("db");
    let { name, price, image } = req.body;
    db.create_product([name, price, image]).then(ok => res.sendStatus(200));
  }
};
