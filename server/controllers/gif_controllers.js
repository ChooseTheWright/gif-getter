var gifs = []

module.exports = {
  addGif: (req, res) => {
    let {id, url, gifStatus} = req.body;
    let newGif = {
      id:id,
      url:url,
      gifStatus:gifStatus
    };
    var controller = 0;
    for (let i=0; i < gifs.length; i++) {
      if (gifs[i].id === newGif.id) {
        controller = 1;
      }
    }
    if (controller === 0) {
      gifs.push(newGif);
    }
    res.status(200).send(gifs);
  }
}
