export const postPicture = (req, res) => {

    console.log(req.file);

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    res.send(`<div><h2>Here's the picture:</h2><img src='${fileUrl}'/></div>`);
}

