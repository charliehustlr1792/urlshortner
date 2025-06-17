import getShortUrl from "../dao/shorturl.js";
import {createShortUrlWithoutUser} from "../services/shorturl.service.js";

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL+shortUrl);
}

export const redirectFromShortUrl =async (req,res) =>{
    const {id} =req.params;
    const url = await getShortUrl(id);
    res.redirect(url.fullurl);
}