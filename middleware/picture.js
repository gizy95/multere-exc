export const pictureMiddleware = (req, res, next) => {

    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    } else {
        next();
    }

}